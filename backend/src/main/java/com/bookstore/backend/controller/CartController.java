package com.bookstore.backend.controller;

import java.util.List;
import java.util.Map;

import com.bookstore.backend.entity.CartItem;
import com.bookstore.backend.service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CartController {

    @SuppressWarnings("SpringJavaAutowiredFieldsWarningInspection")
    @Autowired
    CartService cartService;

    @CrossOrigin
    @GetMapping("/api/cart")
    public List<CartItem> getCartItems(@RequestParam Integer userId) {
        return cartService.getCartItems(userId);
    }

    @CrossOrigin
    @DeleteMapping("api/cart")
    public void deleteCartItem(@RequestParam Integer id) {
        cartService.deleteCartItem(id);
    }

    @CrossOrigin
    @PostMapping("/api/cart")
    public void addCartItem(@RequestBody Map<String, Integer> body) {
        Integer userId = body.get("userId");
        Integer bookId = body.get("bookId");
        cartService.addCartItem(userId, bookId);
    }
}
