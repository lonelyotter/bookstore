import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

export default class BookCard extends React.Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/bookDetail",
          search: "?id=" + this.props.book.id,
        }}
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
          <p style={{ color: "red" }}>¥ {this.props.book.price}</p>
          <p style={{ color: "gray" }}>库存{this.props.book.inventory}件</p>
        </Card>
      </Link>
    );
  }
}
