import React from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import OrdersContent from "../components/OrdersContent";
import UsersStatisticContent from "../components/UsersStatisticContent";

export default function UsersStatisticView() {
  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <UsersStatisticContent />
        </Col>
      </Row>
    </Content>
  );
}
