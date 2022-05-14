package com.bookstore.backend.service.impl;

import java.util.Optional;

import com.bookstore.backend.dao.UserDao;
import com.bookstore.backend.entity.User;
import com.bookstore.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public String register(String username, String password, String email) {
        if (userDao.isUserExist(username)) {
            return "Username already exists";
        } else {
            userDao.register(username, password, email);
            return "Success";
        }
    }

    @Override
    public User getUser(String username) {
        return userDao.getUser(username);
    }
}
