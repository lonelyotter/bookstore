package com.bookstore.backend.entity;

import lombok.Data;

@Data
public class UserManage {
    private Integer id;
    private String username;
    private Integer isAdmin;
    private Integer isEnabled;
}
