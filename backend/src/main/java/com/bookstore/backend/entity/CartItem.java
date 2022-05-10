package com.bookstore.backend.entity;

import lombok.Data;

@Data
public class CartItem {
    private Integer id;
    private Integer bookId;
    private String name;
    private Double price;
    private String image;
    private Integer nums;
}
