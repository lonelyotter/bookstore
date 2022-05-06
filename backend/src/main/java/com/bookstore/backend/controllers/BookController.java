package com.bookstore.backend.controllers;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@EnableAutoConfiguration
public class BookController {

    @SuppressWarnings("SpringJavaAutowiredFieldsWarningInspection")
    @Autowired
    BookService bookService;

    @CrossOrigin
    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @CrossOrigin
    @GetMapping("/book/{id}")
    public Book getBook(@PathVariable Integer id){
        return bookService.getBook(id);
    }
}
