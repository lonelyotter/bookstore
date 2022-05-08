package com.bookstore.backend.controller;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class BookController {

    @SuppressWarnings("SpringJavaAutowiredFieldsWarningInspection")
    @Autowired
    BookService bookService;

    @GetMapping("/api/books")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @GetMapping("/api/book/{id}")
    public Book getBook(@PathVariable Integer id) {
        return bookService.getBook(id);
    }
}
