import React from "react";
import { Col, Layout, Row } from "antd";
import BookStoreCarousel from "./BookStoreCarousel";
import "./BookStoreContent.css";

const { Content } = Layout;

class BookStoreContent extends React.Component {
  render() {
    return (
      <Content className={"content"}>
        <Row justify={"center"} style={{ paddingTop: "64px" }}>
          <Col>
            <BookStoreCarousel />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default BookStoreContent;
