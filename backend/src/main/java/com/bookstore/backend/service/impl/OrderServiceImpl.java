package com.bookstore.backend.service.impl;

import com.bookstore.backend.dao.BookDao;
import com.bookstore.backend.dao.CartDao;
import com.bookstore.backend.dao.OrderDao;
import com.bookstore.backend.entity.Order;
import com.bookstore.backend.entity.OrderItem;
import com.bookstore.backend.service.OrderService;
import com.bookstore.backend.entity.CartItem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    CartDao cartDao;

    @Autowired
    OrderDao orderDao;

    @Autowired
    BookDao bookDao;

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
        return orderDao.getItemsOfOrder(id);
    }
}
