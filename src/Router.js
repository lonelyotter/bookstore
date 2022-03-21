import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginView from "./view/LoginView";
import HomeView from "./view/HomeView";
import BookView from "./view/BookView";

export default class BasicRoute extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/bookDetail" element={<BookView />} />

        <Route path="/*" element={<HomeView />} />
      </Routes>
    );
  }
}
