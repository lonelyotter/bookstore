package com.bookstore.backend.dao.impl;

import com.bookstore.backend.dao.CartDao;
import com.bookstore.backend.entity.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class CartDaoImpl implements CartDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<CartItem> getCartItems(Integer userId) {
        String sql = "SELECT cart.id as id, cart.bookId as bookId, book.name as name, book.price as price, book.image as image, cart.nums as nums FROM cart, book WHERE cart.userId = " + userId + " and cart.bookId = book.id";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(CartItem.class));
    }

    @Override
    public void deleteCartItem(Integer id) {
        String sql = "SELECT nums FROM cart WHERE id = ?";
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql, id);
        if (result.size() > 0) {
            Integer nums = (Integer) result.get(0).get("nums");
            if (nums > 1) {
                sql = "UPDATE cart SET nums = ? where id = ?";
                jdbcTemplate.update(sql, nums - 1, id);
            } else {
                sql = "DELETE FROM cart WHERE id = ?";
                jdbcTemplate.update(sql, id);
            }
        }
    }

    @Override
    public void addCartItem(Integer userId, Integer bookId) {
        String sql = "SELECT id, nums FROM cart WHERE userId = ? and bookId = ?";
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql, userId, bookId);
        if (result.size() > 0) {
            Integer id = (Integer) result.get(0).get("id");
            Integer nums = (Integer) result.get(0).get("nums");
            sql = "UPDATE cart SET nums = ? where id = ?";
            jdbcTemplate.update(sql, nums + 1, id);
        } else {
            sql = "INSERT INTO cart(userId, bookId, nums) VALUE(?, ?, ?) ";
            jdbcTemplate.update(sql, userId, bookId, 1);
        }
    }

    @Override
    public void clearCart(Integer userId) {
        String sql = "DELETE FROM cart where userId = ?";
        jdbcTemplate.update(sql, userId);
    }
}
