package com.bookstore.backend.entity;

import lombok.Data;

import java.util.List;

@Data
public class SingleUserStatistic {
    private Integer totalNums;
    private Double totalMoney;
    private List<BooksStatistic> booksStatisticList;
}
