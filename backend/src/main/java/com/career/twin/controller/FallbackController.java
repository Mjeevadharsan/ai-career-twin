package com.career.twin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class FallbackController {

    @GetMapping("/")
    public Map<String, Object> apiStatus() {
        return Map.of(
            "status", "UP",
            "message", "AI Career Twin API is running.",
            "frontendUrl", "https://ai-career-twin.onrender.com"
        );
    }
}
