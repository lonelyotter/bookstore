package com.bookstore.backend.dao.impl;

import java.util.List;
import java.util.Optional;

import com.bookstore.backend.dao.UserDao;
import com.bookstore.backend.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void register(String username, String password, String email) {
        String sql = "INSERT INTO user(username, password, email, isAdmin, isEnable) VALUES ('" + username + "', '" + password + "', '" + email + "', " + 0 + ", " + 1 + ")";
        jdbcTemplate.update(sql);
    }

    @Override
    public User getUser(String username) {
        String sql = "SELECT * FROM user WHERE username='" + username + "'";
        List<User> list = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));
        if (list.size() > 0) {
            return list.get(0);
        } else {
            return null;
        }
    }
}
