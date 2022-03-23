import React from "react";
import { Layout } from "antd";
import BookstoreHeader from "../components/BookstoreHeader";
import BookDetail from "../components/BookDetail";
import BookStoreFooter from "../components/BookStoreFooter";
import "antd/dist/antd.min.css";
import "../css/index.css";
import { Content } from "antd/es/layout/layout";

export default class BookView extends React.Component {
  render() {
    const books = require("../assets/books.json");
    const query = this.props.location.search;
    const arr = query.split("&");
    const bookId = arr[0].substr(4);
    const info = books[bookId - 1];

    return (
      <Layout>
        <BookstoreHeader />
        <Content>
          <BookDetail info={info} />
        </Content>
        <BookStoreFooter />
      </Layout>
    );
  }
}
