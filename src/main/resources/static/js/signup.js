// signup.js – AI Career Twin Registration Page Logic

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reg-password').addEventListener('input', updateStrength);
    document.getElementById('reg-confirm').addEventListener('input',  validateConfirm);
    document.getElementById('reg-name').addEventListener('blur',    () => validateField('name'));
    document.getElementById('reg-email').addEventListener('blur',   () => validateField('email'));
    document.getElementById('reg-mobile').addEventListener('blur',  () => validateField('mobile'));
});

// ── Password strength meter ──────────────────────
function updateStrength() {
    const val = document.getElementById('reg-password').value;
    const bar  = document.getElementById('strength-bar');
    const lbl  = document.getElementById('strength-label');

    let score = 0;
    if (val.length >= 8)            score++;
    if (/[A-Z]/.test(val))          score++;
    if (/[0-9]/.test(val))          score++;
    if (/[^A-Za-z0-9]/.test(val))  score++;

    const levels = [
        { pct: '0%',   color: 'transparent',            text: '',            css: '' },
        { pct: '25%',  color: '#ef4444',                text: 'Weak',        css: 'color:#ef4444' },
        { pct: '50%',  color: '#f59e0b',                text: 'Fair',        css: 'color:#f59e0b' },
        { pct: '75%',  color: '#3b82f6',                text: 'Good',        css: 'color:#3b82f6' },
        { pct: '100%', color: '#10b981',                text: 'Strong',      css: 'color:#10b981' },
    ];

    const level = levels[score];
    bar.style.width      = level.pct;
    bar.style.background = level.color;
    lbl.textContent      = level.text;
    lbl.setAttribute('style', level.css);
}

// ── Toggle password visibility ───────────────────
function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon  = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// ── Individual field validators ──────────────────
function validateField(field) {
    const rules = {
        name:   { id: 'reg-name',    err: 'err-name',    test: v => v.trim().length >= 2,                   msg: 'Please enter your full name.' },
        email:  { id: 'reg-email',   err: 'err-email',   test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),   msg: 'Enter a valid email address.' },
        mobile: { id: 'reg-mobile',  err: 'err-mobile',  test: v => /^[+\d\s\-]{7,15}$/.test(v),            msg: 'Enter a valid mobile number.' },
    };

    const r   = rules[field];
    const val = document.getElementById(r.id).value;
    const fg  = document.getElementById(r.id).closest('.field-group');
    const err = document.getElementById(r.err);

    if (r.test(val)) {
        fg.classList.remove('invalid');
        fg.classList.add('valid');
        err.textContent = '';
        return true;
    } else {
        fg.classList.remove('valid');
        fg.classList.add('invalid');
        err.textContent = r.msg;
        return false;
    }
}

function validateConfirm() {
    const pwd  = document.getElementById('reg-password').value;
    const conf = document.getElementById('reg-confirm').value;
    const fg   = document.getElementById('fg-confirm');
    const err  = document.getElementById('err-confirm');

    if (conf === pwd && conf.length > 0) {
        fg.classList.remove('invalid');
        fg.classList.add('valid');
        err.textContent = '';
        return true;
    } else {
        fg.classList.remove('valid');
        fg.classList.add('invalid');
        err.textContent = conf.length === 0 ? '' : 'Passwords do not match.';
        return false;
    }
}

function validatePassword() {
    const val = document.getElementById('reg-password').value;
    const fg  = document.getElementById('fg-password');
    const err = document.getElementById('err-password');

    if (val.length >= 8) {
        fg.classList.remove('invalid');
        fg.classList.add('valid');
        err.textContent = '';
        return true;
    } else {
        fg.classList.remove('valid');
        fg.classList.add('invalid');
        err.textContent = 'Password must be at least 8 characters.';
        return false;
    }
}

// ── Form submission ──────────────────────────────
async function handleSignup(event) {
    event.preventDefault();

    // Run all validators
    const ok = [
        validateField('name'),
        validateField('email'),
        validateField('mobile'),
        validatePassword(),
        validateConfirm(),
    ].every(Boolean);

    if (!ok) return;

    const terms = document.getElementById('reg-terms');
    if (!terms.checked) {
        showMessage('Please accept the Terms of Service to continue.', 'error');
        return;
    }

    setLoading(true);
    clearMessage();

    const username = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const fullName = document.getElementById('reg-name').value.trim();
    const mobile   = document.getElementById('reg-mobile').value.trim();

    try {
        const res = await fetch('/api/register', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ username, password, fullName, mobile }),
        });

        const data = await res.json();

        if (!res.ok) {
            showMessage(data.error || 'Registration failed. Please try again.', 'error');
        } else {
            showMessage('Account created successfully! Redirecting to login…', 'success');
            setTimeout(() => { window.location.href = '/'; }, 1800);
        }
    } catch (e) {
        showMessage('Could not connect to server. Please try again.', 'error');
    } finally {
        setLoading(false);
    }
}

function setLoading(on) {
    document.getElementById('btn-text').classList.toggle('hidden', on);
    document.getElementById('btn-loader').classList.toggle('hidden', !on);
    document.getElementById('create-btn').disabled = on;
}

function showMessage(text, type) {
    const el = document.getElementById('form-message');
    el.textContent = text;
    el.className   = `form-message ${type}`;
    el.classList.remove('hidden');
}

function clearMessage() {
    const el = document.getElementById('form-message');
    el.classList.add('hidden');
    el.className = 'form-message hidden';
}
