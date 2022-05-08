import React from "react";
import "../components/LoginForm";
import LoginForm from "../components/LoginForm";
import "../css/login.css";
import { useAuth } from "../services/auth";
import { Redirect } from "react-router-dom";

export default function LoginView() {
  const auth = useAuth();
  if (auth.isLogin) return <Redirect to="/" />;

  return (
    <div className={"login-page"}>
      <div className={"form-container"}>
        <LoginForm />
      </div>
    </div>
  );
}
