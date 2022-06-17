import React from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import OrdersManageContent from "../components/OrdersManageContent";

export default function OrdersManageView() {
  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <OrdersManageContent />
        </Col>
      </Row>
    </Content>
  );
}
