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
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
    public void checkout(Integer userId, String name, String phone, String address, String note) {
        List<CartItem> items = cartDao.getCartItems(userId);
        if (items.isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "购物车没有商品");

        // 判断是否有商品库存不足并同时计算订单总价
        double totalPrice = 0.0;
        for (CartItem item : items) {
            int inventory = bookDao.getBook(item.getBook().getId()).getInventory();
            if (inventory < item.getNums()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, item.getBook().getName() + "库存不足，仅剩" + inventory + "本");
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
    }

    private List<Order> filterOrdersByName(List<Order> orders, String name) {
        List<Order> res = new ArrayList<>();
        for (Order order : orders) {
            boolean flag = false;
            List<OrderItem> orderItems = orderDao.getItemsOfOrder(order.getId());
            for (OrderItem orderItem : orderItems) {
                String bookName = bookDao.getBook(orderItem.getBookId()).getName();
                if (bookName.toLowerCase().contains(name.toLowerCase())) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                res.add(order);
            }
        }
        return res;
    }

    @Override
    public List<Order> getOrdersByName(Integer userId, String name) {
        List<Order> orders = orderDao.getOrders(userId);
        return filterOrdersByName(orders, name);
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
    public Order getOrderInformation(Integer id) {
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Integer userId = user.getId();
        Optional<Order> temp = orderDao.getOrder(id);
        boolean isAdmin = userDao.getUser(userId).getIsAdmin() == 1;
        if (isAdmin || Objects.equals(userId, orderDao.getOrder(id).get().getUserId())) {
            return temp.orElse(null);
        } else {
            return null;
        }
    }

    @Override
    public List<Order> getAllOrdersByName(String name) {
        List<Order> orders = orderDao.getAllOrders();
        for (Order order : orders) {
            String username = userDao.getUser(order.getUserId()).getUsername();
            order.setUsername(username);
        }
        return filterOrdersByName(orders, name);
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

    @Override
    public SingleUserStatistic getCustomerStatistic(Integer userId, Date time1, Date time2) {
        Integer totalNums = 0;
        double totalMoney = 0.0;
        HashMap<Integer, BooksStatistic> temp = new HashMap<>();
        List<Order> orders = orderDao.getOrdersByUserIdAndTimeBetween(userId, time1, time2);
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
                totalNums += orderItem.getNums();
                totalMoney += orderItem.getPrice() * orderItem.getNums();
                booksStatistic.setNums(booksStatistic.getNums() + orderItem.getNums());
            }
        }
        SingleUserStatistic singleUserStatistic = new SingleUserStatistic();
        singleUserStatistic.setTotalNums(totalNums);
        singleUserStatistic.setTotalMoney(totalMoney);
        singleUserStatistic.setBooksStatisticList(new ArrayList<>(temp.values()));
        return singleUserStatistic;
    }
}
