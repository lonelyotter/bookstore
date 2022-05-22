package com.bookstore.backend.dao.impl;

import java.util.Optional;

import com.bookstore.backend.dao.UserDao;
import com.bookstore.backend.entity.User;

import com.bookstore.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    UserRepository userRepository;

    @Override
    public void register(String username, String password, String email) {
        String sql = "INSERT INTO user(username, password, email, isAdmin, isEnabled) VALUES ('" + username + "', '" + password + "', '" + email + "', " + 0 + ", " + 1 + ")";
        jdbcTemplate.update(sql);
    }

    @Override
    public boolean isUserExist(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.isPresent();
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
