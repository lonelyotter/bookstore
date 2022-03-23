import React from "react";
import { Layout, Row, Col, Menu } from "antd";
import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo.svg";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default class BookstoreHeader extends React.Component {
  render() {
    const user = { name: "Haochen Song", avatar: avatar };

    return (
      <Header id={"header"}>
        <Row id={"header-container"}>
          <Col span={10}>
            <Link to={"/"}>
              <div id="logo">
                <img
                  alt="logo"
                  className="logo"
                  src={logo}
                  style={{ height: 40 }}
                />
                <span id={"bookstore-text"}> Bookstore</span>
              </div>
            </Link>
            <Menu
              className={"menu"}
              style={{ background: "none" }}
              defaultSelectedKeys={"/"}
              mode="horizontal"
            >
              <Menu.Item key="/books">
                <Link to={"/books"}>All Books</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={14}>
            <UserAvatar user={user} />
          </Col>
        </Row>
      </Header>
    );
  }
}
