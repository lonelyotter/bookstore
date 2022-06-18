package com.bookstore.backend.service;

import com.bookstore.backend.entity.*;

import java.util.Date;
import java.util.List;

public interface OrderService {
    String checkout(Integer userId, String name, String phone, String address, String note);

    List<Order> getOrders(Integer userId);

    List<OrderItem> getOrderDetail(Integer id);

    List<Order> getAllOrders();

    List<UsersStatistic> getUsersStatistic(Date time1, Date time2);

    List<BooksStatistic> getBooksStatistic(Date time1, Date time2);

    SingleUserStatistic getCustomerStatistic(Integer userId, Date time1, Date time2);
}
