package com.bookstore.backend.entity;

import lombok.Data;

import java.util.ArrayList;
import java.util.Date;

@Data
public class Order {
    private Integer id;
    private Integer userId;
    private String name;
    private String phone;
    private String address;
    private String note;
    private ArrayList<Integer> books;
}
