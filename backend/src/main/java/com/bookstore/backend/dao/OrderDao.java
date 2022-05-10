package com.bookstore.backend.dao;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.entity.Order;

import java.sql.Date;
import java.util.List;

public interface OrderDao {
    Integer createOrder(Integer userId, String name, String phone, String address, String note, Double price);

    void addBookForOrder(Integer orderId, Integer bookId);

    List<Order> getOrders(Integer userId);

    List<Book> getBooksOfOrder(Integer id);

}