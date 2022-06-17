package com.bookstore.backend.controller;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {

    @Autowired
    BookService bookService;

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @GetMapping("/book/{id}")
    public Book getBook(@PathVariable Integer id) {
        return bookService.getBook(id);
    }

    @PostMapping("/admin/book")
    public void updateBook(@RequestBody Book book) {
        bookService.updateBook(book);
    }
}
