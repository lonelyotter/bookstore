import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getOrderDetail, getOrderInfo } from "../services/api";
import { Col, Descriptions, Divider, Row, Table } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import moment from "moment";

export default function OrderDetail() {
  const { orderId } = useParams();

  const [books, setBooks] = useState([]);

  const [info, setInfo] = useState({});

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
    getOrderInfo(orderId).then((data) => setInfo(data));
  }, []);

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <FileTextOutlined />
        <span> 订单详情</span>
      </Divider>
      <Row>
        <Col span={24} style={{ marginTop: "10px" }}>
          <Descriptions>
            <Descriptions.Item label="收件人">{info.name}</Descriptions.Item>
            <Descriptions.Item label="下单时间">
              {moment(info.time).format("yyyy-MM-D hh:mm:ss")}
            </Descriptions.Item>
            <Descriptions.Item label="地址">{info.address}</Descriptions.Item>
            <Descriptions.Item label="总价">¥{info.price}</Descriptions.Item>
            <Descriptions.Item label="手机号">{info.phone}</Descriptions.Item>
            <Descriptions.Item label="备注">{info.note}</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table dataSource={books} columns={columns} bordered={true} />
        </Col>
      </Row>
    </div>
  );
}
