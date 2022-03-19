import React from "react";
import { Layout } from "antd";
import BookstoreHeader from "./components/BookstoreHeader";
import "antd/dist/antd.min.css";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <BookstoreHeader />
      </Layout>
    );
  }
}

export default App;
