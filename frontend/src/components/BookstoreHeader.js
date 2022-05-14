import React from "react";
import { Layout, Row, Col, Menu, Input, Popover } from "antd";
import logo from "../assets/logo.svg";
import UserAvatar from "./UserAvatar";
import { Link, useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;

export default function BookstoreHeader({ user, setUser }) {
  let history = useHistory();

  if (user === null) {
    return null;
  }

  return (
    <Header className={"header"}>
      <Row justify={"center"} gutter={16} wrap={false}>
        {/*logo*/}
        <Col span={1}>
          <Link to={"/"}>
            <img alt="" src={logo} className={"logo"} />
          </Link>
        </Col>
        {/*text*/}
        <Col xs={0} sm={0} md={0} lg={2}>
          <Link to={"/"}>
            <span
              style={{
                fontSize: "1.2em",
                whiteSpace: "nowrap",
                color: "green",
              }}
            >
              一个书店
            </span>
          </Link>
        </Col>
        {/*menu*/}
        <Col sm={16} md={9} lg={7} xl={4}>
          <Menu
            style={{ background: "none", borderBottom: "0" }}
            mode="horizontal"
          >
            <Menu.Item key="/">
              <Link to={"/"}>首页</Link>
            </Menu.Item>
            <Menu.Item key="/books">
              <Link to={"/books"}>全部书籍</Link>
            </Menu.Item>
          </Menu>
        </Col>
        {/*search*/}
        <Col xs={0} md={8} lg={10}>
          <Search
            placeholder="搜索书名"
            allowClear
            enterButton
            style={{ marginTop: 8 }}
            onSearch={(query) => {
              history.push("/search?query=" + encodeURIComponent(query));
            }}
          />
        </Col>
        <Col xs={1} md={0}>
          <Popover
            content={
              <Input.Search
                placeholder="search"
                enterButton
                onSearch={(query) =>
                  history.push("/search?query=" + encodeURIComponent(query))
                }
              />
            }
            placement="bottom"
          >
            <SearchOutlined style={{ fontSize: "1.4em", marginTop: 14 }} />
          </Popover>
        </Col>
        {/*user*/}
        <Col style={{ marginLeft: "10px" }}>
          <UserAvatar user={user} setUser={setUser} />
        </Col>
      </Row>
    </Header>
  );
}
