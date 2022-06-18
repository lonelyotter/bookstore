package com.bookstore.backend.dao.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.bookstore.backend.dao.BookDao;
import com.bookstore.backend.dao.OrderDao;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.entity.Order;
import com.bookstore.backend.repository.OrderItemRepository;
import com.bookstore.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.bookstore.backend.entity.OrderItem;


@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    BookDao bookDao;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderItemRepository orderItemRepository;

    @Override
    public Integer createOrder(Integer userId, String name, String phone, String address, String note, Double price) {
        Order order = new Order();
        order.setUserId(userId);
        order.setPrice(price);
        order.setName(name);
        order.setAddress(address);
        order.setPhone(phone);
        order.setNote(note);
        orderRepository.save(order);
        return order.getId();
    }

    @Override
    public void addBookForOrder(Integer orderId, Integer bookId, Integer nums) {
        Book book = bookDao.getBook(bookId);
        OrderItem item = new OrderItem();
        item.setOrderId(orderId);
        item.setBookId(bookId);
        item.setNums(nums);
        item.setPrice(book.getPrice());
        orderItemRepository.save(item);
    }

    private void setOrderItemInformation(OrderItem orderItem) {
        Book book = bookDao.getBook(orderItem.getBookId());
        orderItem.setName(book.getName());
        orderItem.setAuthor(book.getAuthor());
        orderItem.setIsbn(book.getIsbn());
    }

    @Override
    public List<Order> getOrders(Integer userId) {
        return orderRepository.findByUserId(userId);
    }

    @Override
    public List<OrderItem> getItemsOfOrder(Integer orderId) {
        List<OrderItem> orderItems = orderItemRepository.findByOrderId(orderId);
        for (OrderItem orderItem : orderItems) {
            setOrderItemInformation(orderItem);
        }
        return orderItems;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> getOrder(Integer orderId) {
        return orderRepository.findById(orderId);
    }

    @Override
    public List<Order> getOrdersByUserIdAndTimeBetween(Integer userId, Date time1, Date time2) {
        return orderRepository.findByUserIdAndTimeBetween(userId, time1, time2);
    }

    @Override
    public List<Order> getOrdersByTimeBetween(Date time1, Date time2) {
        return orderRepository.findByTimeBetween(time1, time2);
    }
}
