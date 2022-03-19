import React from "react";
import { Dropdown, Avatar, Image, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export default class UserAvatar extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key={1} icon={<ShoppingCartOutlined />}>
          <a href={"#"}>
            <span>我的购物车</span>
          </a>
        </Menu.Item>
        <Menu.Item key={2} icon={<FileTextOutlined />}>
          <a href={"#"}>
            <span>我的订单</span>
          </a>
        </Menu.Item>
        <Menu.Item key={3} icon={<UserOutlined />}>
          <a href={"#"}>
            <span>个人中心</span>
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key={4} icon={<LogoutOutlined />} danger>
          <a href={"#"}>
            <span>退出登录</span>
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div id={"avatar"}>
        <Dropdown overlay={menu} placement="bottomRight">
          <div style={{ cursor: "pointer", whiteSpace: "nowrap" }}>
            <Avatar
              src={<Image src={this.props.user.avatar} preview={false} />}
            />
            <span style={{ marginLeft: 8 }}>{this.props.user.name}</span>
          </div>
        </Dropdown>
      </div>
    );
  }
}
