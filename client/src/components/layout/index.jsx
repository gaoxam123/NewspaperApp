import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-header">
        {/* <h1>This is Navbar!</h1> */}
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
