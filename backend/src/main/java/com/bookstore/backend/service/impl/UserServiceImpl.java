package com.bookstore.backend.service.impl;

import java.util.List;

import com.bookstore.backend.dao.UserDao;
import com.bookstore.backend.entity.User;
import com.bookstore.backend.entity.UserManage;
import com.bookstore.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.xml.ws.http.HTTPException;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public void register(String username, String password, String email) {
        if (userDao.isUserExist(username)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "用户名重复");
        }
        userDao.register(username, password, email);
    }

    @Override
    public User getUser(String username) {
        return userDao.getUser(username);
    }

    @Override
    public List<UserManage> getUsers() {
        return userDao.getUsers();
    }

    @Override
    public void enableUser(Integer userId) {
        if (userDao.getUser(userId).getIsAdmin() == 0) {
            userDao.enableUser(userId);
        }
    }

    @Override
    public void disableUser(Integer userId) {
        if (userDao.getUser(userId).getIsAdmin() == 0) {
            userDao.disableUser(userId);
        }
    }
}
