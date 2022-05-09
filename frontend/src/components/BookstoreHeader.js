import React from "react";
import { Layout, Row, Col, Menu, Input, Popover } from "antd";
import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo.svg";
import UserAvatar from "./UserAvatar";
import { Link, withRouter } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;

function BookstoreHeader(props) {
  const user = { name: "Haochen Song", avatar: avatar };

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
            placeholder="搜索书籍或作者"
            allowClear
            enterButton
            style={{ marginTop: 8 }}
            onSearch={(query) =>
              this.props.history.push(
                "/search?query=" + encodeURIComponent(query)
              )
            }
          />
        </Col>
        <Col xs={1} md={0}>
          <Popover
            content={
              <Input.Search
                placeholder="search"
                enterButton
                onSearch={(query) =>
                  this.props.history.push(
                    "/search?query=" + encodeURIComponent(query)
                  )
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
          <UserAvatar user={user} />
        </Col>
      </Row>
    </Header>
  );
}

export default withRouter(BookstoreHeader);
