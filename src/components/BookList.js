import React from "react";
import { Col, Row } from "antd";
import BookCard from "./BookCard";

export default class BookList extends React.Component {
  render() {
    const books = require("../assets/books.json");

    return (
      <div style={{ marginTop: "30px" }}>
        <Row>
          {books.map((book) => (
            <Col key={book.id} span={6} style={{ padding: "10px" }}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
