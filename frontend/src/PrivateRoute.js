import { Redirect, Route } from "react-router-dom";
import { getUser } from "./services/auth";

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getUser() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
