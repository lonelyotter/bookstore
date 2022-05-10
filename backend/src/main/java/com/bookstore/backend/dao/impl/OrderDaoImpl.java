package com.bookstore.backend.dao.impl;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Objects;

import com.bookstore.backend.dao.BookDao;
import com.bookstore.backend.dao.OrderDao;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import com.bookstore.backend.entity.OrderItem;


@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    BookDao bookDao;

    @Override
    public Integer createOrder(Integer userId, String name, String phone, String address, String note, Double price) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO orders (userId, name, phone, Address, note, price) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, userId);
            ps.setString(2, name);
            ps.setString(3, phone);
            ps.setString(4, address);
            ps.setString(5, note);
            ps.setDouble(6, price);
            return ps;
        }, keyHolder);
        return Objects.requireNonNull(keyHolder.getKey()).intValue();
    }

    @Override
    public void addBookForOrder(Integer orderId, Integer bookId, Integer nums) {
        Book book = bookDao.getBook(bookId);
        String sql = "INSERT INTO orderItem (orderId, bookId, price, author, nums, isbn, name) VALUES(?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, orderId, bookId, book.getPrice(), book.getAuthor(), nums, book.getISBN(), book.getName());
    }

    @Override
    public List<Order> getOrders(Integer userId) {
        String sql = "SELECT * FROM orders WHERE userId = " + userId;
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Order.class));
    }

    @Override
    public List<OrderItem> getItemsOfOrder(Integer id) {
        String sql = "SELECT * FROM orderItem WHERE orderId = " + id;
        List<OrderItem> temp = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(OrderItem.class));
        System.out.println(temp);
        return temp;
    }
}
