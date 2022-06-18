package com.bookstore.backend.service;

import com.bookstore.backend.entity.Order;
import com.bookstore.backend.entity.OrderItem;
import com.bookstore.backend.entity.UsersStatistic;

import java.time.LocalDate;

import java.util.Date;
import java.util.List;

public interface OrderService {
    String checkout(Integer userId, String name, String phone, String address, String note);

    List<Order> getOrders(Integer userId);

    List<OrderItem> getOrderDetail(Integer id);

    List<Order> getAllOrders();

    List<UsersStatistic> getUsersStatistic(Date time1, Date time2);
}
