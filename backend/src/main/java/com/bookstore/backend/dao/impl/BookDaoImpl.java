package com.bookstore.backend.dao.impl;

import com.bookstore.backend.dao.BookDao;
import com.bookstore.backend.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDaoImpl implements BookDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<Book> getBooks() {
        return jdbcTemplate.query("SELECT * FROM book", new BeanPropertyRowMapper<>(Book.class));
    }

    @Override
    public Book getBook(Integer id) {
        List<Book> book = jdbcTemplate.query(
                "SELECT * FROM book WHERE id = " + id.toString(),
                new BeanPropertyRowMapper<>(Book.class));
        if (book.size() > 0) {
            return book.get(0);
        } else {
            return null;
        }
    }

    @Override
    public void updateInventory(Integer id, Integer inventory) {
        String sql = "UPDATE book SET inventory = ? WHERE id = ?";
        jdbcTemplate.update(sql, inventory, id);
    }
}
