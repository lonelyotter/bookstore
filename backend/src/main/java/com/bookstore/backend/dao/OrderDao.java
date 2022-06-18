package com.bookstore.backend.dao;

import com.bookstore.backend.entity.Order;
import com.bookstore.backend.entity.OrderItem;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface OrderDao {
    Integer createOrder(Integer userId, String name, String phone, String address, String note, Double price);

    void addBookForOrder(Integer orderId, Integer bookId, Integer nums);

    List<Order> getOrders(Integer userId);

    List<OrderItem> getItemsOfOrder(Integer id);

    List<Order> getAllOrders();

    Optional<Order> getOrder(Integer orderId);

    List<Order> getOrdersByUserIdAndTimeBetween(Integer userId, Date time1, Date time2);

    List<Order> getOrdersByTimeBetween(Date time, Date time2);
}
