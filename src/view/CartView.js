import React from "react";
import { Layout } from "antd";
import BookstoreHeader from "../components/BookstoreHeader";
import BookStoreFooter from "../components/BookStoreFooter";
import "antd/dist/antd.min.css";
import "../css/index.css";
import CartContent from "../components/CartContent";

export default class CartView extends React.Component {
  render() {
    return (
      <Layout>
        <BookstoreHeader />
        <CartContent />
        <BookStoreFooter />
      </Layout>
    );
  }
}
