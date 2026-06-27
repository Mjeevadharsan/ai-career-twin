package com.career.twin.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import java.security.SecureRandom;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class EmailOtpService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String senderEmail;

    // In-memory OTP storage: email -> OtpEntry
    private final ConcurrentHashMap<String, OtpEntry> otpStore = new ConcurrentHashMap<>();

    // Verification tokens: email -> token (valid after OTP is verified, consumed on registration)
    private final ConcurrentHashMap<String, String> verificationTokens = new ConcurrentHashMap<>();

    private static final int OTP_LENGTH = 6;
    private static final long OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
    private static final long MIN_RESEND_INTERVAL_MS = 30 * 1000; // 30 seconds between resends

    private final SecureRandom random = new SecureRandom();

    public EmailOtpService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // ──────── OTP Entry ────────
    private static class OtpEntry {
        final String otp;
        final long expiresAt;
        final long createdAt;
        int attempts;

        OtpEntry(String otp, long expiresAt) {
            this.otp = otp;
            this.expiresAt = expiresAt;
            this.createdAt = System.currentTimeMillis();
            this.attempts = 0;
        }

        boolean isExpired() {
            return System.currentTimeMillis() > expiresAt;
        }
    }

    // ──────── Generate & Send OTP ────────
    public void generateAndSendOtp(String email) throws MessagingException {
        // Rate-limit: prevent resending within 30 seconds
        OtpEntry existing = otpStore.get(email.toLowerCase());
        if (existing != null && !existing.isExpired()) {
            long elapsed = System.currentTimeMillis() - existing.createdAt;
            if (elapsed < MIN_RESEND_INTERVAL_MS) {
                throw new RuntimeException("Please wait " + ((MIN_RESEND_INTERVAL_MS - elapsed) / 1000) + " seconds before requesting a new OTP.");
            }
        }

        // Generate 6-digit numeric OTP
        StringBuilder otpBuilder = new StringBuilder();
        for (int i = 0; i < OTP_LENGTH; i++) {
            otpBuilder.append(random.nextInt(10));
        }
        String otp = otpBuilder.toString();

        // Store with expiry
        long expiresAt = System.currentTimeMillis() + OTP_EXPIRY_MS;
        otpStore.put(email.toLowerCase(), new OtpEntry(otp, expiresAt));

        try {
            // Send email
            sendOtpEmail(email, otp);
        } catch (MessagingException | RuntimeException e) {
            // Remove from store if sending failed so they aren't locked out/rate-limited
            otpStore.remove(email.toLowerCase());
            throw e;
        }

        System.out.println("OTP sent to " + email + ": " + otp + " (expires in 5 minutes)");
    }

    // ──────── Verify OTP ────────
    public String verifyOtp(String email, String otp) {
        String key = email.toLowerCase();
        OtpEntry entry = otpStore.get(key);

        if (entry == null) {
            throw new RuntimeException("No OTP was sent to this email. Please request a new one.");
        }

        if (entry.isExpired()) {
            otpStore.remove(key);
            throw new RuntimeException("OTP has expired. Please request a new one.");
        }

        entry.attempts++;
        if (entry.attempts > 5) {
            otpStore.remove(key);
            throw new RuntimeException("Too many failed attempts. Please request a new OTP.");
        }

        if (!entry.otp.equals(otp.trim())) {
            throw new RuntimeException("Invalid OTP. Please check and try again. (" + (5 - entry.attempts) + " attempts remaining)");
        }

        // OTP verified — remove it and issue a verification token
        otpStore.remove(key);
        String token = UUID.randomUUID().toString();
        verificationTokens.put(key, token);

        return token;
    }

    // ──────── Consume Verification Token (used during registration) ────────
    public boolean consumeVerificationToken(String email, String token) {
        if (email == null || token == null) return false;
        String key = email.toLowerCase();
        String stored = verificationTokens.get(key);
        if (stored != null && stored.equals(token)) {
            verificationTokens.remove(key);
            return true;
        }
        return false;
    }

    // ──────── Send HTML Email ────────
    private void sendOtpEmail(String toEmail, String otp) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(senderEmail);
        helper.setTo(toEmail);
        helper.setSubject("AI Career Twin — Email Verification Code");

        String htmlContent = """
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin:0; padding:0; background:#0a0f1e; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
                <table width="100%%" cellpadding="0" cellspacing="0" style="max-width:520px; margin:40px auto; background:linear-gradient(145deg,#0f172a,#1a1f3a); border-radius:20px; border:1px solid rgba(59,130,246,0.2); box-shadow:0 20px 60px rgba(0,0,0,0.5);">
                    <tr>
                        <td style="padding:40px 36px 32px; text-align:center;">
                            <!-- Logo area -->
                            <div style="margin-bottom:24px;">
                                <span style="font-size:28px; font-weight:800; color:#f1f5f9; letter-spacing:-0.02em;">
                                    AI Career <span style="color:#60a5fa;">Twin</span>
                                </span>
                            </div>

                            <!-- Title -->
                            <h1 style="margin:0 0 8px; font-size:22px; font-weight:700; color:#e2e8f0;">
                                Verify Your Email
                            </h1>
                            <p style="margin:0 0 28px; font-size:14px; color:#94a3b8; line-height:1.6;">
                                Use the code below to complete your registration.<br>
                                This code expires in <strong style="color:#f59e0b;">5 minutes</strong>.
                            </p>

                            <!-- OTP Code -->
                            <div style="background:rgba(59,130,246,0.08); border:2px dashed rgba(59,130,246,0.3); border-radius:14px; padding:22px 20px; margin-bottom:28px;">
                                <span style="font-size:38px; font-weight:800; letter-spacing:12px; color:#60a5fa; font-family:'Courier New',monospace;">
                                    %s
                                </span>
                            </div>

                            <!-- Info -->
                            <p style="margin:0 0 6px; font-size:13px; color:#64748b; line-height:1.5;">
                                If you did not request this verification, please ignore this email.
                            </p>

                            <!-- Footer -->
                            <div style="margin-top:32px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.06);">
                                <p style="margin:0; font-size:11px; color:#475569;">
                                    &copy; 2026 AI Career Twin &mdash; B.E. CSE Final Year Project
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            """.formatted(otp);

        helper.setText(htmlContent, true);
        mailSender.send(message);
    }
}
