package com.bookstore.backend.dao;

import java.util.Optional;

import com.bookstore.backend.entity.User;

public interface UserDao {
    User getUser(String username);

    void register(String username, String password, String email);
}
