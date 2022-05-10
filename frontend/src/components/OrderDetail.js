import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getOrderDetail } from "../services/api";
import { Col, Divider, Row, Table } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

export default function OrderDetail() {
  const { orderId } = useParams();

  const [books, setBooks] = useState([]);

  const columns = [
    {
      title: "书名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "单价",
      dataIndex: "price",
      key: "price",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "数量",
      dataIndex: "nums",
      key: "nums",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.nums - b.nums,
    },
  ];

  useEffect(() => {
    getOrderDetail(orderId).then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <FileTextOutlined />
        <span> 订单详情</span>
      </Divider>
      <Row>
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table dataSource={books} columns={columns} bordered={true} />
        </Col>
      </Row>
    </div>
  );
}
