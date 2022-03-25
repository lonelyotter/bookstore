import React from "react";
import { Button, Form, Input } from "antd";

export default class CheckOutForm extends React.Component {
  render() {
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 20,
      },
    };
    const onFinish = (values) => {
      console.log(values);
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
            name={["telephone"]}
            label="手机号"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["remarks"]} label="备注">
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
    );
  }
}
