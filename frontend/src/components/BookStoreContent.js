import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import BookStoreCarousel from "./BookStoreCarousel";
import BookList from "./BookList";
import { FireOutlined } from "@ant-design/icons";
import { getBooks } from "../services/api";

export default function BookStoreContent() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

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
      <BookList books={books} />
    </div>
  );
}
