import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { getUser, login } from "../services/auth";
import { Link } from "react-router-dom";

export default function LoginForm({ user, setUser }) {
  const onFinish = ({ username, password }) => {
    login(username, password)
      .then(() => setUser(getUser()))
      .catch((err) => message.error(err.response.data));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Login</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        <div style={{ marginTop: "20px" }}>
          Or <Link to={"/register"}>register now!</Link>
        </div>
      </Form.Item>
    </Form>
  );
}
