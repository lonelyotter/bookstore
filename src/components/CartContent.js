import React from "react";
import { Content } from "antd/es/layout/layout";
import { Button, Divider } from "antd";
import CartList from "./CartList";
import CheckOutForm from "./CheckOutForm";

export default class CartContent extends React.Component {
  render() {
    return (
      <Content className={"content"}>
        <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>
          我的购物车
        </h1>
        <Divider />
        <CartList />
        <Divider />
        <CheckOutForm />
      </Content>
    );
  }
}
