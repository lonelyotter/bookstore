import React, { useState } from "react";
import { Modal, Button, Col, Divider, Row, Table } from "antd";
import { EditOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import BookEdit from "./BookEdit";
const { confirm } = Modal;

export default function BookManageContent() {
  const [books, setBooks] = useState([
    {
      isbn: "1",
      name: "Java核心技术卷II",
      type: "编程",

      author: "凯S.霍斯特曼",
      price: 95.2,
      description:
        "本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",
      inventory: 1000,
    },
    {
      isbn: "2",
      name: "深入理解计算机系统",
      type: "编程",

      author: "兰德尔·E·布莱恩特",
      price: 136.9,
      description:
        "程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！",
      inventory: 1200,
    },
    {
      isbn: "3",
      name: "Effective C++",
      type: "编程",

      author: "梅耶",
      price: 51.3,
      description:
        "大师名著纵横二十载，稳居任一荐书单三甲；称职程序员傍身绝学，通向C++精微奥妙之门。",
      inventory: 1000,
    },
    {
      isbn: "4",
      name: "小王子",
      type: "儿童文学",

      author: "圣-埃克苏佩里",
      price: 8.89,
      description:
        "豆瓣9.7高分推荐！旅法翻译家梅子涵之女梅思繁法文直译，舒朗大开本，央美教授高精度还原原作插画。首次收录全球舞台剧、音乐会、电影、动画片等对《小王子》的精彩诠释，通晓名作的前世今生。",
      inventory: 1000,
    },
    {
      isbn: "5",
      name: "Java编程思想",
      type: "编程",

      author: "Bruce Eckel",
      price: 91.2,
      description: "Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。",
      inventory: 9096,
    },
  ]);

  const [currentBook, setCurrentBook] = useState(null);

  const updateBook = (bookInfo) => {
    // update the book information by ISBN
    // if ISBN does not exist then add the book
    console.log(bookInfo);
    let newBooks = books.filter((book) => book.isbn !== bookInfo.isbn);
    newBooks.push({
      isbn: bookInfo.isbn,
      type: bookInfo.type,
      author: bookInfo.author,
      price: bookInfo.price,
      name: bookInfo.name,
      inventory: bookInfo.inventory,
      description: bookInfo.description,
    });
    setCurrentBook(null);
    setBooks(newBooks);
  };

  const deleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  function showDeleteConfirm(name, isbn) {
    confirm({
      title: "确定删除书籍：" + name + "?",
      icon: <ExclamationCircleOutlined />,
      okText: "确定",
      okButtonProps: { danger: true },
      okType: "primary",
      cancelText: "取消",
      autoFocusButton: null,
      onOk() {
        deleteBook(isbn);
      },
    });
  }

  const columns = [
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "ISBN",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.isbn - b.isbn,
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
            <Button
              type={"primary"}
              onClick={() => setCurrentBook(record.isbn)}
            >
              编辑
            </Button>
            <Button
              type={"primary"}
              danger
              onClick={() => showDeleteConfirm(record.name, record.isbn)}
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
        <EditOutlined /> <span> 书籍管理</span>
      </Divider>
      <Row>
        <Col span={24}>
          {currentBook ? (
            <BookEdit
              {...books.find((book) => book.isbn === currentBook)}
              updateBook={updateBook}
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
            dataSource={books.filter(
              (book) =>
                book.author.toLowerCase().includes(searchText) ||
                book.title.toLowerCase().includes(searchText)
            )}
            columns={columns}
            bordered={true}
          />
        </Col>
      </Row>
    </div>
  );
}
