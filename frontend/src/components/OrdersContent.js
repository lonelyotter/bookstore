import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Space } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { DatePicker, Table } from "antd";
import Search from "antd/es/input/Search";
import { getOrders } from "../services/api";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;

export default function OrdersContent() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((orders) => {
      let data = orders.map((order) => {
        return {
          orderId: order.id,
          name: order.name,
          address: order.address,
          phone: order.phone,
          price: order.price,
          purchaseDate: new Date(Date.parse(order.time)),
          key: order.id,
        };
      });
      setOrders(data);
    });
  }, []);

  const columns = [
    {
      title: "订单编号",
      dataIndex: "orderId",
      key: "orderId",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.orderId - b.orderId,
    },

    {
      title: "收货人",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "手机号",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "购买时间",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
      defaultSortOrder: "descend",
      sortDirections: ["ascend", "descend"],
      render: (date) => date.toLocaleString(),
      sorter: (a, b) => a.purchaseDate - b.purchaseDate,
    },
    {
      title: "收货地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "查看详情",
      dataIndex: "orderId",
      key: "orderId",
      render: (id) => (
        <Space size={"middle"}>
          <Link to={"/order/" + id}>详情</Link>
        </Space>
      ),
    },
  ];

  const [searchText, setSearchText] = useState("");

  const defaultStartDate = new Date("January 1, 1900 00:00:00");
  const defaultEndDate = new Date("January 1, 2099 00:00:00");

  const [dateRange, setDateRange] = useState([
    defaultStartDate,
    defaultEndDate,
  ]);

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <FileTextOutlined />
        <span> 我的订单</span>
      </Divider>
      <Row>
        {/*filter components*/}
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <RangePicker
            onChange={(range) => {
              if (range === null) {
                setDateRange([defaultStartDate, defaultEndDate]);
              } else {
                setDateRange(range);
              }
            }}
            renderExtraFooter={() => "extra footer"}
            showTime
          />

          {/*<Search*/}
          {/*  placeholder="输入书名"*/}
          {/*  allowClear*/}
          {/*  style={{ width: 300 }}*/}
          {/*  onSearch={(v) => setSearchText(v.toLowerCase())}*/}
          {/*/>*/}
        </Col>

        {/*orders table*/}
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table
            dataSource={orders.filter(
              (book) =>
                // book.name.toLowerCase().includes(searchText) &&
                dateRange[0] < book.purchaseDate &&
                dateRange[1] > book.purchaseDate
            )}
            columns={columns}
            bordered={true}
          />
        </Col>
      </Row>
    </div>
  );
}
