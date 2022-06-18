package com.bookstore.backend.dao.impl;

import com.bookstore.backend.dao.BookDao;
import com.bookstore.backend.entity.Book;
import com.bookstore.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class BookDaoImpl implements BookDao {

    @Autowired
    BookRepository bookRepository;

    @Override
    public List<Book> getBooks() {
        return bookRepository.findByIsDeleted(0);
    }

    @Override
    public Book getBook(Integer id) {
        Optional<Book> book = bookRepository.findByIdAndIsDeleted(id, 0);
        return book.orElse(null);
    }

    @Override
    public void updateInventory(Integer id, Integer inventory) {
        Optional<Book> book = bookRepository.findById(id);
        if (book.isPresent()) {
            Book newBook = book.get();
            newBook.setInventory(inventory);
            bookRepository.save(newBook);
        }
    }

    @Override
    public void updateBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void deleteBook(Integer id) {
        Optional<Book> temp = bookRepository.findByIdAndIsDeleted(id, 0);
        if (temp.isPresent()) {
            Book book = temp.get();
            book.setIsDeleted(1);
            bookRepository.save(book);
        }
    }
}
