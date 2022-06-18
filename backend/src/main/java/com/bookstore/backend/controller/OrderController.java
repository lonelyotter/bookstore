package com.bookstore.backend.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.bookstore.backend.entity.*;
import com.bookstore.backend.security.auth.AuthUserDetail;
import com.bookstore.backend.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/checkout")
    public String checkout(@RequestBody Map<String, String> body) {
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String name = body.get("name");
        String note = body.get("note");
        String phone = body.get("phone");
        String address = body.get("address");

        return orderService.checkout(user.getId(), name, phone, address, note);
    }

    @GetMapping("/orders")
    public List<Order> getOrders() {
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return orderService.getOrders(user.getId());
    }

    @GetMapping("/order")
    public List<OrderItem> getOrderDetail(@RequestParam Integer id) {
        return orderService.getOrderDetail(id);
    }

    @GetMapping("/admin/orders")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/admin/usersStatistic")
    public List<UsersStatistic> getUsersStatistic(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime time1,
                                                  @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime time2) {

        Date startDate = Date.from(time1.toLocalDate().atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date endDate = Date.from(time2.toLocalDate().atStartOfDay(ZoneId.systemDefault()).toInstant());
        return orderService.getUsersStatistic(startDate, endDate);
    }

    @GetMapping("/admin/booksStatistic")
    public List<BooksStatistic> getBooksStatistic(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime time1,
                                                  @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime time2) {
        Date startDate = Date.from(time1.toLocalDate().atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date endDate = Date.from(time2.toLocalDate().atStartOfDay(ZoneId.systemDefault()).toInstant());
        return orderService.getBooksStatistic(startDate, endDate);
    }

    @GetMapping("/statistic")
    public SingleUserStatistic getSingleUserStatistic(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime time1,
                                                      @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime time2) {
        Date startDate = Date.from(time1.toLocalDate().atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date endDate = Date.from(time2.toLocalDate().atStartOfDay(ZoneId.systemDefault()).toInstant());
        AuthUserDetail user = (AuthUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return orderService.getCustomerStatistic(user.getId(), startDate, endDate);
    }
}
