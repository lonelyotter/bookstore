package com.bookstore.backend.entity;

import lombok.Data;

@Data
public class OrderItem {
    private Integer id;
    private String name;
    private String isbn;
    private Integer nums;
    private String author;
    private Double price;
    private Integer bookId;
    private Integer orderId;
}
