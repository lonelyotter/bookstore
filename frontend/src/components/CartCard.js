import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row } from "antd";

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
            </div>
          </Col>
          <Col>
            <Button
              type={"primary"}
              danger
              icon={<DeleteOutlined />}
              onClick={() => props.removeItem(props.bookInfo.id)}
            >
              移除
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
