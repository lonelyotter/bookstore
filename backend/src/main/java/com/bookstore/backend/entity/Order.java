package com.bookstore.backend.entity;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class Order {
    private Integer id;
    private Integer userId;
    private Timestamp time;
    private String name;
    private String address;
    private String phone;
    private String note;
    private Double price;
}
