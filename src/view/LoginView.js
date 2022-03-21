import React from "react";
import "../components/LoginForm";
import LoginForm from "../components/LoginForm";
import "antd/dist/antd.min.css";
import "../css/login.css";

export default class LoginView extends React.Component {
  render() {
    return (
      <div className={"login-page"}>
        <div className={"form-container"}>
          <LoginForm />
        </div>
      </div>
    );
  }
}
