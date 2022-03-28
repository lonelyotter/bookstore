import React from "react";
import { Divider } from "antd";
import CartList from "./CartList";
import CheckOutForm from "./CheckOutForm";
import { FormOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export default class CartContent extends React.Component {
  render() {
    return (
      <div>
        <Divider style={{ fontSize: "xx-large" }}>
          <ShoppingCartOutlined />
          <span> 我的购物车</span>
        </Divider>
        <CartList />
        <Divider style={{ fontSize: "x-large", marginTop: "30px" }}>
          <FormOutlined />
          <span> 填写订单</span>
        </Divider>{" "}
        <CheckOutForm />
      </div>
    );
  }
}
