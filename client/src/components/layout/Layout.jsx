import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Layout.css"
import Footer from "../footer/Footer";
import { CartContext } from "../../store/shoppingCartContext";

const Layout = () => {
  const [shoppingCart, setShoppingCart] = useState({
    items: []
  })
  const contextValue = {
    items: shoppingCart.items
  }
  return (
    <CartContext value={contextValue}>
      <div className="layout">
        <div className="layout-header">
          <Navbar />
        </div>
        <div className="layout-content">
          <Outlet />
        </div>
        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    </CartContext>
  )
}

export default Layout;
