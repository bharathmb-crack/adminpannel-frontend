import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import LoginPage from "./components/LoginPage";
// import CoverPage from "./components/CoverPage";
// import ViewClient from "./components/ViewClient";
import SideBar from "./components/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideBar />
  </React.StrictMode>
);
