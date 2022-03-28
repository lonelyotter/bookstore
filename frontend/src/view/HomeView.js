import React from "react";
import BookStoreContent from "../components/BookStoreContent";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";

export default class HomeView extends React.Component {
  render() {
    return (
      <Content className={"content"}>
        <Row justify={"center"}>
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <BookStoreContent />
          </Col>
        </Row>
      </Content>
    );
  }
}
