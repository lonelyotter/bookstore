import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { BarChartOutlined } from "@ant-design/icons";
import { DatePicker, Table } from "antd";
import { getBooksStatistic } from "../services/api";
import moment from "moment";

const { RangePicker } = DatePicker;

const defaultDateRange = [
  moment("1-1-1999", "MM-DD-YYYY"),
  moment("1-1-2099", "MM-DD-YYYY"),
];

export default function BooksStatisticContent() {
  const [stat, setStat] = useState([]);
  const [dateRange, setDateRange] = useState(null);

  useEffect(() => {
    if (!dateRange) {
      getBooksStatistic(
        defaultDateRange[0].format(),
        defaultDateRange[1].format()
      ).then((data) => {
        setStat(data);
      });
    } else {
      getBooksStatistic(dateRange[0].format(), dateRange[1].format()).then(
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
      title: "累计销量",
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
        <span> 书籍销量统计</span>
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
