package com.bookstore.backend.dao;

import com.bookstore.backend.entity.User;

public interface UserDao {
    User getUser(String username);

    void register(String username, String password, String email);

    boolean isUserExist(String username);
}
