import React, { useEffect, useState } from "react";
import { Col, Descriptions, Divider, Row } from "antd";
import { BarChartOutlined } from "@ant-design/icons";
import { DatePicker, Table } from "antd";
import { getStatistic } from "../services/api";
import moment from "moment";

const { RangePicker } = DatePicker;

const defaultDateRange = [
  moment("1-1-1999", "MM-DD-YYYY"),
  moment("1-1-2099", "MM-DD-YYYY"),
];

export default function StatisticContent() {
  const [stat, setStat] = useState({
    booksStatisticList: [],
    totalNums: 0,
    totalMoney: 0,
  });
  const [dateRange, setDateRange] = useState(null);

  useEffect(() => {
    if (!dateRange) {
      getStatistic(
        defaultDateRange[0].format(),
        defaultDateRange[1].format()
      ).then((data) => {
        setStat(data);
      });
    } else {
      getStatistic(dateRange[0].format(), dateRange[1].format()).then(
        (data) => {
          setStat(data);
        }
      );
    }
  }, [dateRange]);

  const columns = [
    {
      title: "书名",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "数量",
      dataIndex: "nums",
      key: "nums",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.nums - b.nums,
    },
  ];

  return (
    <div>
      <Divider style={{ fontSize: "xx-large" }}>
        <BarChartOutlined />
        <span> 书籍购买统计</span>
      </Divider>
      <Row>
        {/*filter components*/}
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <RangePicker onChange={(range) => setDateRange(range)} />
        </Col>

        <Col span={24} style={{ marginTop: 20 }}>
          <Descriptions bordered>
            <Descriptions.Item label="购买总本数">
              {stat.totalNums}
            </Descriptions.Item>
            <Descriptions.Item label="购买总金额">
              {stat.totalMoney.toFixed(2)}¥
            </Descriptions.Item>
          </Descriptions>
        </Col>

        {/*orders table*/}
        <Col span={24} style={{ marginTop: "10px" }}>
          <Table
            dataSource={stat.booksStatisticList}
            columns={columns}
            bordered={true}
          />
        </Col>
      </Row>
    </div>
  );
}
