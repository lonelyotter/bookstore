import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default class BookSearchBar extends React.Component {
  render() {
    return (
      <Search
        size="large"
        placeholder="搜索书籍"
        enterButton
        style={{ marginBottom: "20px" }}
      />
    );
  }
}
