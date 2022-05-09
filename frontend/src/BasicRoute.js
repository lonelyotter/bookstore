import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginView from "./view/LoginView";
import CartView from "./view/CartView";
import AllBooksView from "./view/AllBooksView";
import BookView from "./view/BookView";
import SearchView from "./view/SearchView";
import BookManageView from "./view/BookManageView";
import OrdersView from "./view/OrdersView";
import HomeView from "./view/HomeView";
import BookstoreHeader from "./components/BookstoreHeader";
import BookStoreFooter from "./components/BookStoreFooter";
import { getUser } from "./services/auth";
import { PrivateRoute } from "./PrivateRoute";

export default function BasicRoute() {
  const [user, setUser] = useState(getUser());

  return (
    <Router>
      <BookstoreHeader user={user} setUser={setUser} />
      <Switch>
        <Route path={"/login"}>
          <LoginView user={user} setUser={setUser} />
        </Route>
        <PrivateRoute path={"/cart"} component={CartView} />
        <PrivateRoute path={"/books"} component={AllBooksView} />
        <PrivateRoute path={"/book/:bookId"} component={BookView} />
        <PrivateRoute path={"/search"} component={SearchView} />
        <PrivateRoute path={"/bookManage"} component={BookManageView} />
        <PrivateRoute path={"/orders"} component={OrdersView} />
        <PrivateRoute path={"/*"} component={HomeView} />
      </Switch>
      <BookStoreFooter />
    </Router>
  );
}
