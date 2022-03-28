import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row } from "antd";

export default class CartCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ margin: "30px", width: "500px" }} align={"center"}>
        <Card>
          <Row align={"middle"} justify={"space-between"} warp="false">
            <Col>
              <Image src={this.props.bookInfo.image} width={150} />
            </Col>
            <Col>
              <div
                align={"left"}
                style={{
                  width: "200px",
                  wordWrap: "break-word",
                  wordBreak: "break-all",
                  overflow: "hidden",
                }}
              >
                <h2>{this.props.bookInfo.name}</h2>
                <h3>
                  数量：<span>{this.props.num}</span>
                </h3>
                <h3 style={{ color: "red" }}>
                  ¥{this.props.bookInfo.price * this.props.num}
                </h3>
              </div>
            </Col>
            <Col>
              <Button type={"primary"} danger icon={<DeleteOutlined />}>
                移除
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
