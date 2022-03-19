import React from "react";
import { Col, Layout, Row } from "antd";
import BookSearchBar from "./BookSearchBar";
import BookStoreCarousel from "./BookStoreCarousel";
import "./BookStoreContent.css";
import BookList from "./BookList";

const { Content } = Layout;

class BookStoreContent extends React.Component {
  render() {
    return (
      <Content className={"content"}>
        <BookSearchBar />

        <Row justify={"center"} style={{ paddingTop: "20px" }}>
          <Col>
            <BookStoreCarousel />
          </Col>
        </Row>
        <BookList />
      </Content>
    );
  }
}

export default BookStoreContent;
