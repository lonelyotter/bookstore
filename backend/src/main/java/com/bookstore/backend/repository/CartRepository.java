package com.bookstore.backend.repository;

import com.bookstore.backend.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<CartItem, Integer> {
    List<CartItem> findByUserId(Integer userId);

    Optional<CartItem> findByUserIdAndBookId(Integer userId, Integer bookId);

    void deleteAllByUserId(Integer userId);
}
