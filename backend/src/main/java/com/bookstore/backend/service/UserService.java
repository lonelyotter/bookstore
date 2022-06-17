package com.bookstore.backend.service;

import java.util.List;
import java.util.Optional;

import com.bookstore.backend.entity.User;
import com.bookstore.backend.entity.UserManage;

public interface UserService {
    String register(String username, String password, String email);

    User getUser(String username);

    List<UserManage> getUsers();

    void enableUser(Integer userId);

    void disableUser(Integer userId);

}
