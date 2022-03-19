import React from "react";
import { Layout } from "antd";
import BookstoreHeader from "./components/BookstoreHeader";
import BookStoreContent from "./components/BookStoreContent";
import "antd/dist/antd.min.css";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <BookstoreHeader />
        <BookStoreContent />
      </Layout>
    );
  }
}

export default App;
