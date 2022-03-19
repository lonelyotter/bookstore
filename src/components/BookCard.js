import React from "react";
import { Card, Row, Col } from "antd";

export default class BookCard extends React.Component {
  render() {
    return (
      <Card
        hoverable
        cover={<img src={this.props.book.image} alt={this.props.book.name} />}
      >
        <p>{this.props.book.name}</p>
        <Row>
          <Col span={12} style={{ color: "red" }}>
            ¥ {this.props.book.price}
          </Col>
          <Col span={12} style={{ color: "gray", textAlign: "right" }}>
            库存{this.props.book.inventory}件
          </Col>
        </Row>
      </Card>
    );
  }
}
