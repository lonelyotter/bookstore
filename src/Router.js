import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginView from "./view/LoginView";
import HomeView from "./view/HomeView";

export default class BasicRoute extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="home" element={<LoginView />} />
        <Route path="/*" element={<HomeView />} />
      </Routes>
    );
  }
}
