import React from "react";
import CartContent from "../components/CartContent";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";

export default class CartView extends React.Component {
  render() {
    return (
      <Content className={"content"}>
        <Row justify={"center"}>
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <CartContent />
          </Col>
        </Row>
      </Content>
    );
  }
}
