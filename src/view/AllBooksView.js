import React from "react";
import { Layout } from "antd";
import BookstoreHeader from "../components/BookstoreHeader";
import BookStoreFooter from "../components/BookStoreFooter";
import "antd/dist/antd.min.css";
import "../css/index.css";
import BookList from "../components/BookList";

const { Content } = Layout;

export default class AllBooksView extends React.Component {
  render() {
    return (
      <Layout>
        <BookstoreHeader />
        <Content className={"content"}>
          <BookList />
        </Content>
        <BookStoreFooter />
      </Layout>
    );
  }
}
