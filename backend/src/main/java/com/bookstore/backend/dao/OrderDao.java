package com.bookstore.backend.dao;

import java.sql.Date;

public interface OrderDao {
    Integer createOrder(Integer userId, String name, String phone, String address, String note);

    void addBookForOrder(Integer orderId, Integer bookId);
}
