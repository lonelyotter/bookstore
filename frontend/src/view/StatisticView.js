import React from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import StatisticContent from "../components/StatisticContent";

export default function StatisticView() {
  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <StatisticContent />
        </Col>
      </Row>
    </Content>
  );
}
