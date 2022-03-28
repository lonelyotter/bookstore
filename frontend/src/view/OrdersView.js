import React from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import OrdersContent from "../components/OrdersContent";

export default class OrdersView extends React.Component {
  render() {
    return (
      <Content className={"content"}>
        <Row justify={"center"}>
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <OrdersContent />
          </Col>
        </Row>
      </Content>
    );
  }
}
