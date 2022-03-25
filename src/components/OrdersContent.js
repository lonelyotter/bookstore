import React from "react";
import { Col, Divider, Row } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { DatePicker, Table } from "antd";
import Search from "antd/es/input/Search";
const { RangePicker } = DatePicker;

export default class OrdersContent extends React.Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
      },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "4",
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park",
      },
    ];

    return (
      <div>
        <Divider style={{ fontSize: "xx-large" }}>
          <FileTextOutlined />
          <span> 我的订单</span>
        </Divider>
        <Row>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <RangePicker />

            <Search
              placeholder="输入书名或作者"
              allowClear
              style={{ width: 300 }}
            />
          </Col>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    );
  }
}
