import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

export default class BookCard extends React.Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/bookDetails",
          search: "?id=" + this.props.book.id,
        }}
        target="_blank"
      >
        <Card
          hoverable
          bordered={false}
          cover={
            <img
              src={this.props.book.image}
              alt={this.props.book.name}
              loading
            />
          }
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
      </Link>
    );
  }
}
