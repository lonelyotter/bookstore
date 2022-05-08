package com.bookstore.backend.controller;

import java.util.Map;

import com.bookstore.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthController {

    @Autowired
    UserService authService;

    @PostMapping("/register")
    public void register(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        String email = body.get("email");
        System.out.println("register!!!!!!");
        System.out.println(username);
        System.out.println(password);
        System.out.println(email);
        authService.register(username, password, email);
    }

    @GetMapping("/login")
    public String login() {
        System.out.println("login!!!!!!!!!!");
        return "Welcome";
    }
}
