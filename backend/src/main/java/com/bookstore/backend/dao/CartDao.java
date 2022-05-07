package com.bookstore.backend.dao;

import com.bookstore.backend.entity.CartItem;

import java.util.List;

public interface CartDao {
    List<CartItem> getCartItems(Integer userId);
}
