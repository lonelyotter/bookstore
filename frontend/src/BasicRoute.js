import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginView from "./view/LoginView";
import PrivateRoute from "./PrivateRoute";

export default class BasicRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/*" component={PrivateRoute} />
      </Switch>
    );
  }
}
