package com.bookstore.backend.dao;

import com.bookstore.backend.entity.User;
import com.bookstore.backend.entity.UserManage;

import java.util.List;

public interface UserDao {
    User getUser(String username);

    User getUser(Integer id);

    void register(String username, String password, String email);

    boolean isUserExist(String username);

    List<UserManage> getUsers();

    void enableUser(Integer userId);

    void disableUser(Integer userId);
}
