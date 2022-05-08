import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginView from "./view/LoginView";
import { ProvideAuth } from "./services/auth";
import CartView from "./view/CartView";
import AllBooksView from "./view/AllBooksView";
import BookView from "./view/BookView";
import SearchView from "./view/SearchView";
import BookManageView from "./view/BookManageView";
import OrdersView from "./view/OrdersView";
import HomeView from "./view/HomeView";
import BookstoreHeader from "./components/BookstoreHeader";
import BookStoreFooter from "./components/BookStoreFooter";
import { PrivateRoute } from "./PrivateRoute";

export default class BasicRoute extends React.Component {
  render() {
    return (
      <ProvideAuth>
        <BookstoreHeader />
        <Switch>
          <Route path={"/login"} component={LoginView} />
          <PrivateRoute path={"/cart"} component={CartView} />
          <Route path={"/books"} component={AllBooksView} />
          <Route path={"/book/:bookId"} component={BookView} />
          <Route path={"/search"} component={SearchView} />
          <Route path={"/bookManage"} component={BookManageView} />
          <Route path={"/orders"} component={OrdersView} />
          <Route path={"/"} component={HomeView} />
        </Switch>
        <BookStoreFooter />
      </ProvideAuth>
    );
  }
}
