package com.bookstore.backend.controller;

import java.util.List;
import java.util.Map;

import com.bookstore.backend.entity.UserManage;
import com.bookstore.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
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

    @GetMapping("/admin/users")
    public List<UserManage> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/admin/enableUser")
    public void enableUser(@RequestParam Integer userId) {
        userService.enableUser(userId);
    }

    @PostMapping("/admin/disableUser")
    public void disableUser(@RequestParam Integer userId) {
        userService.disableUser(userId);
    }
}
