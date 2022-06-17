package com.bookstore.backend.repository;

import com.bookstore.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByUserId(Integer userId);

    @Override
    Optional<Order> findById(Integer integer);
}
