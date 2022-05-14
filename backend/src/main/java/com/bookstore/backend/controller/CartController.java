package com.bookstore.backend.controller;

import java.util.List;
import java.util.Map;

import com.bookstore.backend.entity.CartItem;
import com.bookstore.backend.security.auth.AuthUserDetail;
import com.bookstore.backend.service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/cart")
    public List<CartItem> getCartItems() {
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return cartService.getCartItems(user.getId());
    }

    @DeleteMapping("/cart")
    public void deleteCartItem(@RequestParam Integer id) {
        cartService.deleteCartItem(id);
    }

    @PostMapping("/cart")
    public void addCartItem(@RequestBody Map<String, Integer> body) {
        Integer bookId = body.get("bookId");
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        cartService.addCartItem(user.getId(), bookId);
    }
}
