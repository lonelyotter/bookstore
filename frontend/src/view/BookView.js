import React from "react";
import BookDetail from "../components/BookDetail";
import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import {useParams} from "react-router-dom";

export default function BookView() {
    const books = require("../assets/books.json");
    const {bookId} = useParams();
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
