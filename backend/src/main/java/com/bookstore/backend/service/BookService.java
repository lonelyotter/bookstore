package com.bookstore.backend.service;

import com.bookstore.backend.entity.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> getBooks();

    Book getBook(Integer id);
}
