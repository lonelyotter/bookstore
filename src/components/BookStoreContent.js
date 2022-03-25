import React from "react";
import { Col, Divider, Layout, Row } from "antd";
import BookStoreCarousel from "./BookStoreCarousel";
import BookList from "./BookList";
import { FireOutlined } from "@ant-design/icons";

class BookStoreContent extends React.Component {
  render() {
    return (
      <div>
        <Row justify={"center"} style={{ marginBottom: "50px" }}>
          <Col>
            <BookStoreCarousel />
          </Col>
        </Row>
        <Divider style={{ fontSize: "x-large" }}>
          <FireOutlined style={{ color: "red" }} />
          <span> 热门书籍</span>
        </Divider>
        <BookList />
      </div>
    );
  }
}

export default BookStoreContent;
