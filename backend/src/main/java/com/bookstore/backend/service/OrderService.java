package com.bookstore.backend.service;

import java.sql.Date;

public interface OrderService {
    String checkout(Integer userId, String name, String phone, String address, String note);
}
