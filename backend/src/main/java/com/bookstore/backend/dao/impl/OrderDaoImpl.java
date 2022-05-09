package com.bookstore.backend.dao.impl;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Date;
import java.util.Objects;

import com.bookstore.backend.dao.OrderDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Integer createOrder(Integer userId, String name, String phone, String address, String note) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO bookstore.orders (userId, name, phone, Address, note) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, userId);
            ps.setString(2, name);
            ps.setString(3, phone);
            ps.setString(4, address);
            ps.setString(5, note);
            return ps;
        }, keyHolder);
        return Objects.requireNonNull(keyHolder.getKey()).intValue();
    }

    @Override
    public void addBookForOrder(Integer orderId, Integer bookId) {
        String sql = "INSERT INTO bookstore.orderItem (orderId, bookId) VALUES(?, ?)";
        jdbcTemplate.update(sql, orderId, bookId);
    }

}
