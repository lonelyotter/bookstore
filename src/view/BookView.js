import React from "react";
import { Layout } from "antd";
import BookstoreHeader from "../components/BookstoreHeader";
import BookDetail from "../components/BookDetail";
import BookStoreFooter from "../components/BookStoreFooter";
import "antd/dist/antd.min.css";
import "../css/index.css";

export default class BookView extends React.Component {
  render() {
    return (
      <Layout>
        <BookstoreHeader />
        <BookDetail />
        <BookStoreFooter />
      </Layout>
    );
  }
}
