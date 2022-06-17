import React, { useEffect } from "react";
import { Button, Divider, Form, Input, InputNumber } from "antd";

export default function BookEdit(props) {
  const [form] = Form.useForm();

  /* eslint-disable no-template-curly-in-string */
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

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(props);
  });

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Form
            name="nest-messages"
            onFinish={(values) =>
              props.updateBook({ id: props.bookId, ...values })
            }
            validateMessages={validateMessages}
            style={{ width: "100%" }}
            form={form}
          >
            <Form.Item
              name={"name"}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 15 }}
              label="书名"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"author"}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 15 }}
              label={"作者"}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"type"}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 15 }}
              label="分类"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 15 }}
              name={"isbn"}
              label="ISBN"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 4 }}
              name={"inventory"}
              label="库存"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 4 }}
              name={"price"}
              label="价格"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 15 }}
              name={"image"}
              label="封面URL"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={"description"}
              label="简介"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 15 }}
            >
              <Input.TextArea style={{ resize: "none", height: 120 }} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Divider />
    </div>
  );
}
