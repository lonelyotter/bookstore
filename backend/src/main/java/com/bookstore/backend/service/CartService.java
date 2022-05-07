package com.bookstore.backend.service;

import com.bookstore.backend.entity.CartItem;

import java.util.List;

public interface CartService {
    List<CartItem> getCartItems(Integer userId);
}
