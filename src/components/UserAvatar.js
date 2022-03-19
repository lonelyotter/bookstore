import React from "react";
import { Dropdown, Avatar, Image, Menu } from "antd";

export default class UserAvatar extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key={1}>
          <span>我的订单</span>
        </Menu.Item>
        <Menu.Item key={2}>
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item key={3}>
          <span>退出登录</span>
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
