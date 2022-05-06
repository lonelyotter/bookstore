package com.bookstore.backend.entity;

import lombok.Data;

@Data
public class Book {
    private String ISBN;
    private String name;
    private String author;
    private String description;
    private String image;
    private Double price;
    private Integer inventory;

}
