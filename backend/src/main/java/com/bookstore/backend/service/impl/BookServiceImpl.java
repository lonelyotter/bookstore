package com.bookstore.backend.service.impl;

import com.bookstore.backend.dao.impl.BookDaoImpl;
import com.bookstore.backend.dao.impl.CartDaoImpl;
import com.bookstore.backend.entity.Book;
import com.bookstore.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    BookDaoImpl bookDao;

    @Autowired
    CartDaoImpl cartDao;


    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    @Override
    public Book getBook(Integer id) {
        return bookDao.getBook(id);
    }

    @Override
    public void updateBook(Book book) {
        bookDao.updateBook(book);
    }

    @Override
    public void deleteBook(Integer id) {
        cartDao.deleteByBookId(id);
        bookDao.deleteBook(id);
    }
}
