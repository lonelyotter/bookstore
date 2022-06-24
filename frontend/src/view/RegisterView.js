import React from "react";
import "../components/LoginForm";
import "../css/login.css";
import { Redirect } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export default function RegisterView({ user, setUser }) {
  if (user) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className={"login-page"}>
      <div className={"form-container"}>
        <RegisterForm user={user} setUser={setUser} />
      </div>
    </div>
  );
}
