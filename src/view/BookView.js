import React from "react";
import BookDetail from "../components/BookDetail";
import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";

export default class BookView extends React.Component {
  render() {
    const books = require("../assets/books.json");
    const query = this.props.location.search;
    const arr = query.split("&");
    const bookId = arr[0].substr(4);
    const info = books[bookId - 1];

    return (
      <Content className={"content"}>
        <Row justify={"center"}>
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <BookDetail info={info} />
          </Col>
        </Row>
      </Content>
    );
  }
}
