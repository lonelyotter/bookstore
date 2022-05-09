package com.bookstore.backend.service.impl;

import com.bookstore.backend.dao.OrderDao;
import com.bookstore.backend.entity.Book;
import com.bookstore.backend.entity.Order;
import com.bookstore.backend.service.CartService;
import com.bookstore.backend.service.OrderService;
import com.bookstore.backend.entity.CartItem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    CartService cartService;

    @Autowired
    OrderDao orderDao;

    @Override
    public String checkout(Integer userId, String name, String phone, String address, String note) {
        List<CartItem> items = cartService.getCartItems(userId);
        if (items.isEmpty())
            return "购物车没有商品";

        Double totalPrice = 0.0;
        for (CartItem item : items) {
            totalPrice += item.getPrice();
        }
        
        Integer orderId = orderDao.createOrder(userId, name, phone, address, note, totalPrice);
        items.forEach(item -> orderDao.addBookForOrder(orderId, item.getBookId()));
        cartService.clearCart(userId);
        return "购买成功";
    }

    @Override
    public List<Order> getOrders(Integer userId) {
        return orderDao.getOrders(userId);
    }

    @Override
    public List<Book> getOrderDetail(Integer id) {
        return orderDao.getBooksOfOrder(id);
    }
}
