package com.bookstore.backend.repository;

import com.bookstore.backend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByIsDeleted(Integer isDeleted);

    Optional<Book> findByIdAndIsDeleted(Integer id, Integer isDeleted);
}
