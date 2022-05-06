import React from "react";
import BookDetail from "../components/BookDetail";
import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";

export default function BookView() {
  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <BookDetail />
        </Col>
      </Row>
    </Content>
  );
}
