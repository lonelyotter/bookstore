import React from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import BookList from "../components/BookList";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchView() {
  const books = require("../assets/books.json");
  let query = useQuery();
  let searchString = query.get("query");
  const filteredBooks = books.filter(
    (book) =>
      book.author.toLowerCase().includes(searchString.toLowerCase()) ||
      book.name.toLowerCase().includes(searchString.toLowerCase())
  );

  console.log(filteredBooks);

  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <h1>找到{filteredBooks.length}本书籍：</h1>
          <BookList books={filteredBooks} />
        </Col>
      </Row>
    </Content>
  );
}
