package com.bookstore.backend.controller;

import java.util.Map;

import com.bookstore.backend.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/checkout")
    public String checkout(@RequestBody Map<String, String> body) {
        int userId = Integer.parseInt(body.get("userId"));
        String name = body.get("name");
        String note = body.get("note");
        String phone = body.get("phone");
        String address = body.get("address");

        return orderService.checkout(userId, name, phone, address, note);
    }
}
