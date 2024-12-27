import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Layout.css"

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-header">
        <Navbar />
      </div>
      <div className="layout-content">
        <Outlet />
      </div>
      <div className="layout-footer">
        <h1>This is footer!</h1>
      </div>
    </div>
  )
}

export default Layout;
