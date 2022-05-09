package com.bookstore.backend.entity;


import lombok.Data;

@Data
public class Order {
    private Integer id;
    private Integer userId;
    private String name;
    private String phone;
    private String address;
    private String note;
}
