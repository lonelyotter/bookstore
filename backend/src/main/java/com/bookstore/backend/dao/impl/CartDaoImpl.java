package com.bookstore.backend.dao.impl;

import com.bookstore.backend.dao.BookDao;
import com.bookstore.backend.dao.CartDao;
import com.bookstore.backend.entity.CartItem;
import com.bookstore.backend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class CartDaoImpl implements CartDao {

    @Autowired
    BookDao bookDao;

    @Autowired
    CartRepository cartRepository;

    @Override
    public List<CartItem> getCartItems(Integer userId) {
        return cartRepository.findByUserId(userId);
    }

    @Override
    public void deleteCartItem(Integer id) {
        Optional<CartItem> item = cartRepository.findById(id);
        if (item.isPresent()) {
            CartItem newItem = item.get();
            if (newItem.getNums() == 1) {
                cartRepository.delete(newItem);
            } else {
                newItem.setNums(newItem.getNums() - 1);
                cartRepository.save(newItem);
            }
        }
    }

    @Override
    public void addCartItem(Integer userId, Integer bookId) {
        Optional<CartItem> item = cartRepository.findByUserIdAndBookId(userId, bookId);
        CartItem newItem;
        if (item.isPresent()) {
            newItem = item.get();
            newItem.setNums(1 + newItem.getNums());
        } else {
            newItem = new CartItem();
            newItem.setUserId(userId);
            newItem.setBook(bookDao.getBook(bookId));
            newItem.setNums(1);
        }
        cartRepository.save(newItem);
    }

    @Override
    public void clearCart(Integer userId) {
        cartRepository.deleteAllByUserId(userId);
    }
}
