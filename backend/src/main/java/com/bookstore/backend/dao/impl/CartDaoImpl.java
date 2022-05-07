package com.bookstore.backend.dao.impl;

import com.bookstore.backend.dao.CartDao;
import com.bookstore.backend.entity.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {

    @SuppressWarnings("SpringJavaAutowiredFieldsWarningInspection")
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<CartItem> getCartItems(Integer userId) {
        String sql = "SELECT cart.id as id, cart.bookId as bookId, book.name as name, book.price as price, book.image as image FROM cart, book WHERE cart.userId = " + userId + " and cart.bookId = book.id";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(CartItem.class));
    }
}
