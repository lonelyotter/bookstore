import React from "react";
import { Descriptions, Button, Image, Row, Col } from "antd";
import "../css/BookDetail.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default class BookDetail extends React.Component {
  render() {
    const info = this.props.info;
    if (info == null) {
      return null;
    }

    return (
      <div>
        <div className={"book-detail"}>
          <Row justify={"center"}>
            <Col>
              <div className={"book-image"}>
                <Image
                  alt={info.name}
                  src={info.image}
                  style={{ width: "350px" }}
                />
              </div>
            </Col>
            <Col>
              <div className={"descriptions"}>
                <Descriptions>
                  <Descriptions.Item className={"title"} span={3}>
                    {info.name}
                  </Descriptions.Item>
                  <Descriptions.Item label={"作者"} span={3}>
                    {info.author}
                  </Descriptions.Item>
                  <Descriptions.Item label={"分类"} span={3}>
                    {info.type}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={"定价"}
                    span={3}
                    style={{ textAlign: "center" }}
                  >
                    {<span className={"price"}>{"¥" + info.price}</span>}
                  </Descriptions.Item>
                  <Descriptions.Item label={"状态 "} span={3}>
                    {info.inventory !== 0 ? (
                      <span>
                        有货{" "}
                        <span className={"inventory"}>
                          库存{info.inventory}件
                        </span>
                      </span>
                    ) : (
                      <span className={"status"}>无货</span>
                    )}
                  </Descriptions.Item>
                  <Descriptions.Item label={"书籍简介"} span={3}>
                    {info.description}
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </Col>
          </Row>
        </div>
        <div className={"button-groups"}>
          <Button type="danger" icon={<ShoppingCartOutlined />} size={"large"}>
            加入购物车
          </Button>
        </div>
      </div>
    );
  }
}
