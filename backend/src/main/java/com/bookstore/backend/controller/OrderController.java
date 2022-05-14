package com.bookstore.backend.controller;

import java.util.List;
import java.util.Map;

import com.bookstore.backend.entity.Order;
import com.bookstore.backend.entity.OrderItem;
import com.bookstore.backend.security.auth.AuthUserDetail;
import com.bookstore.backend.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/checkout")
    public String checkout(@RequestBody Map<String, String> body) {
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String name = body.get("name");
        String note = body.get("note");
        String phone = body.get("phone");
        String address = body.get("address");

        return orderService.checkout(user.getId(), name, phone, address, note);
    }

    @GetMapping("/orders")
    public List<Order> getOrders() {
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return orderService.getOrders(user.getId());
    }

    @GetMapping("/order")
    public List<OrderItem> getOrderDetail(@RequestParam Integer id) {
        return orderService.getOrderDetail(id);
    }
}
