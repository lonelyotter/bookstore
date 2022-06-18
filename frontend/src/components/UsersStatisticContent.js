import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { BarChartOutlined } from "@ant-design/icons";
import { DatePicker, Table } from "antd";
import { getUsersStatistic } from "../services/api";
import moment from "moment";

const { RangePicker } = DatePicker;

const defaultDateRange = [
  moment("1-1-1999", "MM-DD-YYYY"),
  moment("1-1-2099", "MM-DD-YYYY"),
];

export default function UsersStatisticContent() {
  const [stat, setStat] = useState([]);
  const [dateRange, setDateRange] = useState(null);

  useEffect(() => {
    if (!dateRange) {
      getUsersStatistic(
        defaultDateRange[0].format(),
        defaultDateRange[1].format()
      ).then((data) => {
        setStat(data);
      });
    } else {
      getUsersStatistic(dateRange[0].format(), dateRange[1].format()).then(
        (data) => {
          setStat(data);
        }
      );
    }
  }, [dateRange]);

  const columns = [
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },

    {
      title: "累计消费",
      dataIndex: "money",
      key: "money",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.money - b.money,
    },
  ];

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <BarChartOutlined />
        <span> 用户累计消费统计</span>
      </Divider>
      <Row>
        {/*filter components*/}
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <RangePicker onChange={(range) => setDateRange(range)} />
        </Col>

        {/*orders table*/}
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table dataSource={stat} columns={columns} bordered={true} />
        </Col>
      </Row>
    </div>
  );
}
