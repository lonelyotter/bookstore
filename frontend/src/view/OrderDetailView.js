import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import React from "react";
import OrderDetail from "../components/OrderDetail";

export default function OrderDetailView() {
  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <OrderDetail />
        </Col>
      </Row>
    </Content>
  );
}
