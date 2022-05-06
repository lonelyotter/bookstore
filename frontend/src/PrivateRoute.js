import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "./view/HomeView";
import AllBooksView from "./view/AllBooksView";
import BookView from "./view/BookView";
import CartView from "./view/CartView";
import OrdersView from "./view/OrdersView";
import { Layout } from "antd";
import BookstoreHeader from "./components/BookstoreHeader";
import BookStoreFooter from "./components/BookStoreFooter";
import SearchView from "./view/SearchView";
import BookManageView from "./view/BookManageView";

export default class PrivateRoute extends React.Component {
  render() {
    return (
      <Layout>
        <BookstoreHeader />
        <Switch>
          <Route path="/home" component={HomeView} />
          <Route path="/books" component={AllBooksView} />
          <Route path="/book/:bookId" component={BookView} />
          <Route path="/cart" component={CartView} />
          <Route path="/orders" component={OrdersView} />
          <Route path="/bookManage" component={BookManageView} />
          <Route path="/search" component={SearchView} />
          <Route path="/*" component={HomeView} />
        </Switch>
        <BookStoreFooter />
      </Layout>
    );
  }
}
