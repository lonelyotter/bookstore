import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { register } from "../services/auth";
import { Link, useHistory } from "react-router-dom";

export default function RegisterForm() {
  let history = useHistory();
  const onFinish = ({ username, password, email }) => {
    register(username, password, email)
      .then(() => {
        message.success("注册成功，请登录");
        history.push("/login");
      })
      .catch((err) => message.error(err.response.data.message));
  };

  return (
    <Form
      name="register"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Register</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名",
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
            message: "请输入密码",
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "请重复输入密码",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("密码不匹配"));
            },
          }),
        ]}
        hasFeedback
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "邮箱不合法",
          },
          {
            required: true,
            message: "请输入邮箱",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          注册
        </Button>
        <div style={{ marginTop: "20px" }}>
          Or <Link to={"/login"}>login now!</Link>
        </div>
      </Form.Item>
    </Form>
  );
}
