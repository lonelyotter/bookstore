import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Row, Table, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUsers, enableUser, disableUser } from "../services/api";

export default function UserManageContent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const updateUsers = () => getUsers().then((data) => setUsers(data));

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },

    {
      title: "是否管理员",
      dataIndex: "isAdmin",
      key: "isAdmin",
    },
    {
      title: "是否正常用户",
      dataIndex: "isEnabled",
      key: "isEnabled",
    },
    {
      title: "修改",
      key: "action",
      render: (_, record) => {
        if (record.isAdmin === 1) {
          return null;
        }
        return (
          <Row justify={"center"}>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                type={"primary"}
                danger
                onClick={() => {
                  disableUser(record.id).then(() => {
                    updateUsers().then(() => message.success("禁用成功"));
                  });
                }}
              >
                禁用
              </Button>
              <Button
                type={"primary"}
                onClick={() => {
                  enableUser(record.id).then(() => {
                    updateUsers().then(() => message.success("解禁成功"));
                  });
                }}
              >
                解禁
              </Button>
            </Col>
          </Row>
        );
      },
    },
  ];

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <UserOutlined /> <span> 用户管理</span>
      </Divider>
      <Row>
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "space-between" }}
        ></Col>
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table dataSource={users} columns={columns} bordered={true} />
        </Col>
      </Row>
    </div>
  );
}
