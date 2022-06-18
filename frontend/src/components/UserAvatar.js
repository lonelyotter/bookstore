import React from "react";
import { Dropdown, Avatar, Image, Menu } from "antd";
import {
  LogoutOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  BookOutlined,
  UserOutlined,
  BarChartOutlined,
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
      <Menu.Item icon={<BarChartOutlined />} key={3}>
        <Link to={"/statistic"}>
          <span>购买统计</span>
        </Link>
      </Menu.Item>

      {user.isAdmin === 1 && (
        <>
          <Menu.Divider />
          <Menu.Item icon={<BookOutlined />} key={4}>
            <Link to={"/bookManage"}>
              <span>书籍管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FileTextOutlined />} key={5}>
            <Link to={"/ordersManage"}>
              <span>订单管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />} key={6}>
            <Link to={"/userManage"}>
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BarChartOutlined />} key={7}>
            <Link to={"/booksStatistic"}>
              <span>书籍销量统计</span>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BarChartOutlined />} key={8}>
            <Link to={"/usersStatistic"}>
              <span>用户消费统计</span>
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
