package com.bookstore.backend.controller;

import java.util.List;
import java.util.Map;

import com.bookstore.backend.entity.CartItem;
import com.bookstore.backend.service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@PreAuthorize("hasRole('User')")
public class CartController {

    @SuppressWarnings("SpringJavaAutowiredFieldsWarningInspection")
    @Autowired
    CartService cartService;

    @GetMapping("/api/cart")
    public List<CartItem> getCartItems(@RequestParam Integer userId) {
        return cartService.getCartItems(userId);
    }

    @DeleteMapping("api/cart")
    public void deleteCartItem(@RequestParam Integer id) {
        cartService.deleteCartItem(id);
    }

    @PostMapping("/api/cart")
    public void addCartItem(@RequestBody Map<String, Integer> body) {
        Integer userId = body.get("userId");
        Integer bookId = body.get("bookId");
        cartService.addCartItem(userId, bookId);
    }
}
