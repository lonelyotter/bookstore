package com.bookstore.backend.service;

import java.util.Optional;

import com.bookstore.backend.entity.User;

public interface UserService {
    void register(String username, String password, String email);

    User getUser(String username);
}
