import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginView from "./view/LoginView";
import HomeView from "./view/HomeView";
import BookView from "./view/BookView";
import CartView from "./view/CartView";
import AllBooksView from "./view/AllBooksView";

export default class BasicRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={HomeView} />
        <Route path="/books" component={AllBooksView} />
        <Route path="/login" component={LoginView} />
        <Route path="/bookDetail" component={BookView} />
        <Route path="/cart" component={CartView} />
        <Route path="/*" component={HomeView} />
      </Switch>
    );
  }
}
