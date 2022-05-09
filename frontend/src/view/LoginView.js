import React from "react";
import "../components/LoginForm";
import LoginForm from "../components/LoginForm";
import "../css/login.css";
import { Redirect } from "react-router-dom";

export default function LoginView({ user, setUser }) {
  if (user) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className={"login-page"}>
      <div className={"form-container"}>
        <LoginForm user={user} setUser={setUser} />
      </div>
    </div>
  );
}
