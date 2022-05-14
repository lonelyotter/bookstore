import React from "react";
import { Dropdown, Avatar, Image, Menu } from "antd";
import {
  LogoutOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import defaultAvatar from "../assets/avatar.jpg";

export default function UserAvatar({ user, setUser }) {
  const menu = (
    <Menu>
      <Menu.Item key={1} icon={<ShoppingCartOutlined />}>
        <Link to={"/cart"}>
          <span>我的购物车</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={2} icon={<FileTextOutlined />}>
        <Link to={"/orders"}>
          <span>我的订单</span>
        </Link>
      </Menu.Item>

      {user.isAdmin === 1 && (
        <>
          <Menu.Item icon={<EditOutlined />} key={3}>
            <Link to={"/bookManage"}>
              <span>书籍管理</span>
            </Link>
          </Menu.Item>
        </>
      )}
      <Menu.Divider />
      <Menu.Item
        onClick={() => {
          logout().then(() => setUser(null));
        }}
        key={4}
        icon={<LogoutOutlined />}
        danger
      >
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div id={"avatar"}>
      <Dropdown overlay={menu} placement="bottomRight">
        <div style={{ cursor: "pointer", whiteSpace: "nowrap" }}>
          <Avatar src={<Image src={defaultAvatar} preview={false} />} />
          <span style={{ marginLeft: 8 }}>{user.username}</span>
        </div>
      </Dropdown>
    </div>
  );
}
