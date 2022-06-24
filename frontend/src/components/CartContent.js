import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Input, message } from "antd";
import { FormOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  addCartItem,
  checkout,
  deleteCartItem,
  getCartItems,
} from "../services/api";
import CartCard from "./CartCard";

export default function CartContent() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems().then((cartItems) => setCartItems(cartItems));
  }, []);

  const updateCart = () =>
    getCartItems().then((cartItems) => setCartItems(cartItems));

  const removeItem = (id) => {
    deleteCartItem(id).then(updateCart);
  };

  const addItem = (bookId) => {
    addCartItem(bookId).then(updateCart);
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const onFinish = (values) => {
    checkout(values)
      .then(() => {
        message.info("购买成功");
        updateCart();
      })
      .catch((err) => message.error(err.response.data.message));
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <ShoppingCartOutlined />
        <span> 我的购物车</span>
      </Divider>
      <div align={"middle"}>
        <div>
          {cartItems.map((cartItem) => (
            <CartCard
              bookInfo={cartItem.book}
              nums={cartItem.nums}
              itemId={cartItem.id}
              removeItem={removeItem}
              addItem={addItem}
              key={cartItem.id}
            />
          ))}
        </div>
      </div>
      <Divider style={{ fontSize: "x-large", marginTop: "30px" }}>
        <FormOutlined />
        <span> 填写订单</span>
      </Divider>
      <div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name={["name"]} label="姓名" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={["address"]}
            label="收货地址"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["phone"]}
            label="手机号"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["note"]} label="备注">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ flex: "right" }}>
            <div style={{ textAlign: "center" }}>
              <Button
                size={"large"}
                type="primary"
                htmlType="submit"
                style={{ width: "30%" }}
              >
                提交订单
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
