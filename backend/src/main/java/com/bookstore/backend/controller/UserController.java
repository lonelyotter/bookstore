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
@CrossOrigin
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public void register(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        String email = body.get("email");
        userService.register(username, password, email);
    }

    @GetMapping("/login")
    public String login() {
        System.out.println("login");
        return "Welcome";
    }
}
