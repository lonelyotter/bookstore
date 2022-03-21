import React from "react";
import { Layout } from "antd";
import BookstoreHeader from "../components/BookstoreHeader";
import BookStoreContent from "../components/BookStoreContent";
import BookStoreFooter from "../components/BookStoreFooter";
import "antd/dist/antd.min.css";
import "../css/index.css";

export default class HomeView extends React.Component {
  render() {
    return (
      <Layout>
        <BookstoreHeader />
        <BookStoreContent />
        <BookStoreFooter />
      </Layout>
    );
  }
}
