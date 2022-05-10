package com.bookstore.backend.service;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.entity.Order;
import com.bookstore.backend.entity.OrderItem;

import java.util.List;

public interface OrderService {
    String checkout(Integer userId, String name, String phone, String address, String note);

    List<Order> getOrders(Integer userId);

    List<OrderItem> getOrderDetail(Integer id);
}
