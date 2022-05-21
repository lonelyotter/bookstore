package com.bookstore.backend.dao;

import com.bookstore.backend.entity.Book;

import java.util.List;
import java.util.Optional;

public interface BookDao {
    List<Book> getBooks();

    Book getBook(Integer id);

    void updateInventory(Integer id, Integer inventory);
}
