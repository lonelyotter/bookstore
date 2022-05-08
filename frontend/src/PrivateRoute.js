import { useAuth } from "./services/auth";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ component: Component, ...rest }) {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
