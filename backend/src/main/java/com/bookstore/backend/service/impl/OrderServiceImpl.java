package com.bookstore.backend.service.impl;

import com.bookstore.backend.dao.BookDao;
import com.bookstore.backend.dao.CartDao;
import com.bookstore.backend.dao.OrderDao;
import com.bookstore.backend.dao.UserDao;
import com.bookstore.backend.entity.*;
import com.bookstore.backend.security.auth.AuthUserDetail;
import com.bookstore.backend.service.OrderService;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    CartDao cartDao;

    @Autowired
    OrderDao orderDao;

    @Autowired
    BookDao bookDao;

    @Autowired
    UserDao userDao;

    @Override
    public String checkout(Integer userId, String name, String phone, String address, String note) {
        List<CartItem> items = cartDao.getCartItems(userId);
        if (items.isEmpty())
            return "购物车没有商品";

        // 判断是否有商品库存不足并同时计算订单总价
        double totalPrice = 0.0;
        for (CartItem item : items) {
            int inventory = bookDao.getBook(item.getBook().getId()).getInventory();
            if (inventory < item.getNums()) {
                return item.getBook().getName() + "库存不足，仅剩" + inventory + "本";
            }
            totalPrice += item.getBook().getPrice() * item.getNums();
        }

        // 更新商品库存
        for (CartItem item : items) {
            int inventory = bookDao.getBook(item.getBook().getId()).getInventory();
            bookDao.updateInventory(item.getBook().getId(), inventory - item.getNums());
        }

        // 创建订单并清空购物车
        Integer orderId = orderDao.createOrder(userId, name, phone, address, note, totalPrice);
        items.forEach(item -> orderDao.addBookForOrder(orderId, item.getBook().getId(), item.getNums()));
        cartDao.clearCart(userId);
        return "购买成功";
    }

    @Override
    public List<Order> getOrders(Integer userId) {
        return orderDao.getOrders(userId);
    }

    @Override
    public List<OrderItem> getOrderDetail(Integer id) {
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Integer userId = user.getId();
        List<OrderItem> temp = orderDao.getItemsOfOrder(id);
        boolean isAdmin = userDao.getUser(userId).getIsAdmin() == 1;
        if (isAdmin || Objects.equals(userId, orderDao.getOrder(id).get().getUserId())) {
            return temp;
        } else {
            return null;
        }
    }

    @Override
    public List<Order> getAllOrders() {
        List<Order> temp = orderDao.getAllOrders();
        for (Order order : temp) {
            String username = userDao.getUser(order.getUserId()).getUsername();
            order.setUsername(username);
        }
        return temp;
    }

    @Override
    public List<UsersStatistic> getUsersStatistic(Date time1, Date time2) {
        List<Order> orders = orderDao.getOrdersByTimeBetween(time1, time2);
        HashMap<Integer, UsersStatistic> temp = new HashMap<>();
        for (Order order : orders) {
            if (!temp.containsKey(order.getUserId())) {
                UsersStatistic newStat = new UsersStatistic();
                newStat.setMoney(0.0);
                newStat.setUsername(userDao.getUser(order.getUserId()).getUsername());
                temp.put(order.getUserId(), newStat);
            }
            UsersStatistic stat = temp.get(order.getUserId());
            stat.setMoney(stat.getMoney() + order.getPrice());
        }
        return new ArrayList<>(temp.values());
    }

    @Override
    public List<BooksStatistic> getBooksStatistic(Date time1, Date time2) {
        List<Order> orders = orderDao.getOrdersByTimeBetween(time1, time2);
        HashMap<Integer, BooksStatistic> temp = new HashMap<>();
        for (Order order : orders) {
            List<OrderItem> orderItems = orderDao.getItemsOfOrder(order.getId());
            for (OrderItem orderItem : orderItems) {
                Book book = bookDao.getBook(orderItem.getBookId());
                if (!temp.containsKey(book.getId())) {
                    BooksStatistic booksStatistic = new BooksStatistic();
                    booksStatistic.setName(book.getName());
                    booksStatistic.setNums(0);
                    temp.put(book.getId(), booksStatistic);
                }
                BooksStatistic booksStatistic = temp.get(book.getId());
                booksStatistic.setNums(booksStatistic.getNums() + orderItem.getNums());
            }
        }
        return new ArrayList<>(temp.values());
    }
}
