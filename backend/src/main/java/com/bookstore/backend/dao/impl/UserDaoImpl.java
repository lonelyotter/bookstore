package com.bookstore.backend.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.bookstore.backend.dao.UserDao;
import com.bookstore.backend.entity.User;

import com.bookstore.backend.entity.UserManage;
import com.bookstore.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserRepository userRepository;

    @Override
    public void register(String username, String password, String email) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setIsAdmin(0);
        user.setIsEnabled(1);
        userRepository.save(user);
    }

    @Override
    public boolean isUserExist(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.isPresent();
    }

    @Override
    public List<UserManage> getUsers() {
        List<User> temp = userRepository.findAll();
        List<UserManage> res = new ArrayList<>();
        for (User user : temp) {
            UserManage newUser = new UserManage();
            newUser.setId(user.getId());
            newUser.setUsername(user.getUsername());
            newUser.setIsAdmin(user.getIsAdmin());
            newUser.setIsEnabled(user.getIsEnabled());
            res.add(newUser);
        }
        return res;
    }

    @Override
    public void enableUser(Integer userId) {
        Optional<User> temp = userRepository.findById(userId);
        if (temp.isPresent()) {
            User user = temp.get();
            user.setIsEnabled(1);
            userRepository.save(user);
        }
    }

    @Override
    public void disableUser(Integer userId) {
        Optional<User> temp = userRepository.findById(userId);
        if (temp.isPresent()) {
            User user = temp.get();
            user.setIsEnabled(0);
            userRepository.save(user);
        }
    }


    @Override
    public User getUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.orElse(null);
    }

    @Override
    public User getUser(Integer id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }
}
