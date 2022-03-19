import React from "react";
import { Layout, Row, Col } from "antd";
import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo.svg";
import UserAvatar from "./UserAvatar";
import "./BookStoreHeader.css";

const { Header } = Layout;

export default class BookstoreHeader extends React.Component {
  render() {
    const user = { name: "Haochen Song", avatar: avatar };

    return (
      <Header id={"header"}>
        <Row id={"header-container"}>
          <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
            <a id="logo" href={"/"}>
              <img
                alt="logo"
                className="logo"
                src={logo}
                style={{ height: 40 }}
              />
              <span id={"bookstore-text"}> Bookstore</span>
            </a>
          </Col>
          <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
            <UserAvatar user={user} />
          </Col>
        </Row>
      </Header>
    );
  }
}
