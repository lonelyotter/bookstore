import React from "react";
import { Col, Layout, Row } from "antd";
import BookList from "../components/BookList";

const { Content } = Layout;

export default class AllBooksView extends React.Component {
  render() {
    const books = require("../assets/books.json");
    return (
      <Content className={"content"}>
        <Row justify={"center"}>
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <BookList books={books} />
          </Col>
        </Row>
      </Content>
    );
  }
}
