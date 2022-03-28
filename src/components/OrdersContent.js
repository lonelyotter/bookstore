import React, { useState } from "react";
import { Col, Divider, Row } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { DatePicker, Table } from "antd";
import Search from "antd/es/input/Search";
const { RangePicker } = DatePicker;

export default function OrdersContent() {
  const [books, setBooks] = useState([
    {
      name: "深入理解计算机系统",
      price: 65,
      purchaseDate: new Date("December 17, 2017 03:24:00"),
    },
    {
      name: "小王子",
      price: 50,
      purchaseDate: new Date("November 17, 2018 09:24:00"),
    },
    {
      name: "机器学习",
      price: 60,
      purchaseDate: new Date("January 17, 2019 09:24:00"),
    },
    {
      name: "老人与海",
      price: 20,
      purchaseDate: new Date("June 17, 2020 09:24:00"),
    },
    {
      name: "动物农场",
      price: 80,
      purchaseDate: new Date("June 17, 2021 09:24:00"),
    },
  ]);

  const columns = [
    {
      title: "书籍名称",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "价格",
      dataIndex: "price",
      key: "price",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "购买时间",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
      sortDirections: ["ascend", "descend"],
      render: (date) => date.toLocaleString(),
      sorter: (a, b) => a.purchaseDate - b.purchaseDate,
      defaultSortOrder: "descend",
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
          />

          <Search
            placeholder="输入书名"
            allowClear
            style={{ width: 300 }}
            onSearch={(v) => setSearchText(v.toLowerCase())}
          />
        </Col>

        {/*orders table*/}
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table
            dataSource={books.filter(
              (book) =>
                book.name.toLowerCase().includes(searchText) &&
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
