import React, { useEffect, useState } from "react";
import { Descriptions, Button, Image, Row, Col, message } from "antd";
import "../css/BookDetail.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addCartItem, getBook } from "../services/api";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { bookId } = useParams();

  const [book, setBook] = useState({});
  useEffect(() => {
    getBook(bookId).then((data) => setBook(data));
  }, []);

  if (!book) return <div>书籍不存在</div>;
  return (
    <div>
      <div className={"book-detail"}>
        <Row justify={"center"}>
          <Col>
            <div className={"book-image"}>
              <Image
                alt={book.name}
                src={book.image}
                style={{ width: "350px" }}
              />
            </div>
          </Col>
          <Col style={{ padding: "0 10px" }}>
            <div className={"descriptions"}>
              <Descriptions>
                <Descriptions.Item className={"title"} span={3}>
                  {book.name}
                </Descriptions.Item>
                <Descriptions.Item label={"作者"} span={3}>
                  {book.author}
                </Descriptions.Item>
                <Descriptions.Item label={"分类"} span={3}>
                  {book.type}
                </Descriptions.Item>
                <Descriptions.Item
                  label={"定价"}
                  span={3}
                  style={{ textAlign: "center" }}
                >
                  {<span className={"price"}>{"¥" + book.price}</span>}
                </Descriptions.Item>
                <Descriptions.Item label={"状态 "} span={3}>
                  {book.inventory !== 0 ? (
                    <span>
                      有货{" "}
                      <span className={"inventory"}>
                        库存{book.inventory}件
                      </span>
                    </span>
                  ) : (
                    <span className={"status"}>无货</span>
                  )}
                </Descriptions.Item>
                <Descriptions.Item label={"书籍简介"} span={3}>
                  {book.description}
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Col>
        </Row>
      </div>
      <div className={"button-groups"}>
        <Button
          type="danger"
          icon={<ShoppingCartOutlined />}
          size={"large"}
          onClick={() =>
            addCartItem(bookId).then(() => message.success("书籍已加入购物车"))
          }
        >
          加入购物车
        </Button>
      </div>
    </div>
  );
}
