import React from "react";
import { Divider } from "antd";
import CartList from "./CartList";
import CheckOutForm from "./CheckOutForm";

export default class CartContent extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>
          我的购物车
        </h1>
        <Divider />
        <CartList />
        <Divider />
        <CheckOutForm />
      </div>
    );
  }
}
