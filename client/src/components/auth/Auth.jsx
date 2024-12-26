import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "./authHeader/AuthHeader";
import AuthFooter from "./authFooter/AuthFooter";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-header">
        <AuthHeader />
      </div>
      <div className="auth-content">
        <Outlet />
      </div>
      <div className="auth-footer">
        <AuthFooter />
      </div>
    </div>
  )
}

export default Auth;
