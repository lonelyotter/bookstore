import React from "react";
import { Descriptions, Button } from "antd";
import "../css/BookDetail.css";
import { ShoppingCartOutlined, DollarOutlined } from "@ant-design/icons";

export default class BookDetail extends React.Component {
  render() {
    const info = {
      id: 1,
      isbn: "1",
      name: "Java核心技术卷II",
      type: "编程",
      author: "凯S.霍斯特曼",
      price: 95.2,
      description:
        "本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",
      inventory: 1000,
      image: "http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
    };
    if (info === null) {
      return null;
    }
    return (
      <div className={"content"}>
        <div className={"book-detail"}>
          <div className={"book-image"}>
            <img
              alt={info.name}
              src={info.image}
              style={{ width: "350px", height: "350px" }}
            />
          </div>
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
                    <span className={"inventory"}>库存{info.inventory}件</span>
                  </span>
                ) : (
                  <span className={"status"}>无货</span>
                )}
              </Descriptions.Item>
              <Descriptions.Item label={"作品简介"} span={3}>
                {info.description}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
        <div className={"button-groups"}>
          <Button type="danger" icon={<ShoppingCartOutlined />} size={"large"}>
            加入购物车
          </Button>

          <Button
            type="danger"
            icon={<DollarOutlined />}
            size={"large"}
            style={{ marginLeft: "15%" }}
            ghost
          >
            立即购买
          </Button>
        </div>
      </div>
    );
  }
}
