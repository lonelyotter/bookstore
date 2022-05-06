import { Col, Divider, Layout, Row } from "antd";
import BookList from "../components/BookList";
import { ReadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getBooks } from "../services/api";

const { Content } = Layout;

export default function AllBooksView() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);
  return (
    <Content className={"content"}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <Divider style={{ fontSize: "xx-large" }}>
            <ReadOutlined /> <span> 全部书籍</span>
          </Divider>
          <BookList books={books} />
        </Col>
      </Row>
    </Content>
  );
}
