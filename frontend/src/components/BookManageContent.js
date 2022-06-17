import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Divider, Row, Table } from "antd";
import { BookOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import BookEdit from "./BookEdit";
import { getBooks, updateBook, deleteBook } from "../services/api";

const { confirm } = Modal;

export default function BookManageContent() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  const [currentBook, setCurrentBook] = useState(null);

  const updateBooks = () => getBooks().then((data) => setBooks(data));

  const myUpdateBook = (bookInfo) => {
    updateBook(bookInfo)
      .then(() => setCurrentBook(null))
      .then(() => updateBooks());
  };

  const myDeleteBook = (id) => {
    deleteBook(id).then(() => updateBooks());
  };

  function showDeleteConfirm(name, id) {
    confirm({
      title: "确定删除书籍：" + name + "?",
      icon: <ExclamationCircleOutlined />,
      okText: "确定",
      okButtonProps: { danger: true },
      okType: "primary",
      cancelText: "取消",
      autoFocusButton: null,
      onOk() {
        myDeleteBook(id);
      },
    });
  }

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "书名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "库存",
      dataIndex: "inventory",
      key: "inventory",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.inventory - b.inventory,
    },
    {
      title: "修改",
      key: "action",
      render: (_, record) => (
        <Row justify={"center"}>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button type={"primary"} onClick={() => setCurrentBook(record.id)}>
              编辑
            </Button>
            <Button
              type={"primary"}
              danger
              onClick={() => showDeleteConfirm(record.name, record.id)}
            >
              删除
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <BookOutlined /> <span> 书籍管理</span>
      </Divider>
      <Row>
        <Col span={24}>
          {currentBook ? (
            <BookEdit
              {...books.find((book) => book.id === currentBook)}
              updateBook={myUpdateBook}
              bookId={currentBook}
            />
          ) : null}
        </Col>
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            type={"primary"}
            onClick={() => setCurrentBook(-1)}
            style={{ marginRight: 16 }}
          >
            添加书籍
          </Button>
          <Search
            placeholder="搜索书名"
            allowClear
            onSearch={(v) => setSearchText(v.toLowerCase())}
            style={{ width: 300 }}
          />
        </Col>
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table
            dataSource={books.filter((book) =>
              book.name.toLowerCase().includes(searchText)
            )}
            columns={columns}
            bordered={true}
          />
        </Col>
      </Row>
    </div>
  );
}
