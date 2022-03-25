import React from "react";
import { Col, Layout, Row } from "antd";
import BookList from "../components/BookList";

const { Content } = Layout;

export default class AllBooksView extends React.Component {
  render() {
    return (
      <Content className={"content"}>
        <Row justify={"center"}>
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <BookList />
          </Col>
        </Row>
      </Content>
    );
  }
}
