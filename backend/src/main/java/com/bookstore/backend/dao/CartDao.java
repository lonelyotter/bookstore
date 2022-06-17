package com.bookstore.backend.dao;

import com.bookstore.backend.entity.CartItem;

import java.util.List;

public interface CartDao {
    List<CartItem> getCartItems(Integer userId);

    void deleteCartItem(Integer id);

    void addCartItem(Integer userId, Integer bookId);

    void clearCart(Integer userId);

    void deleteByBookId(Integer bookId);
}
