import React from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import BooksStatisticContent from "../components/BooksStatisticContent";

export default function BooksStatisticView() {
  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <BooksStatisticContent />
        </Col>
      </Row>
    </Content>
  );
}
