import React from "react";
import { Button, Card, Col, Image, Row, Space } from "antd";

export default function CartCard(props) {
  return (
    <div style={{ margin: "30px", width: "500px" }} align={"center"}>
      <Card>
        <Row align={"middle"} justify={"space-between"} warp="false">
          <Col>
            <Image src={props.bookInfo.image} width={150} />
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
              <h2>{props.bookInfo.name}</h2>
              <h3 style={{ color: "red" }}>¥{props.bookInfo.price}</h3>
              <h3>数量 {props.nums}</h3>
            </div>
          </Col>
          <Col>
            <Row>
              {" "}
              <Button
                type="primary"
                block
                onClick={() => props.addItem(props.bookInfo.id)}
              >
                +
              </Button>
            </Row>
            <Space />
            <Row>
              <Button
                type={"primary"}
                danger
                block
                onClick={() => props.removeItem(props.itemId)}
              >
                -
              </Button>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
