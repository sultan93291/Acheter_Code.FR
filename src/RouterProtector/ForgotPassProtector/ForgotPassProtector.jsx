import React from "react";
import { Navigate } from "react-router-dom";

const ForgotPassProtector = ({ children }) => {
  const isAuthorize = localStorage.getItem("isAuthorize") === "true";

  // Redirect authorized users to the homepage
  if (isAuthorize) {
    return <Navigate to="/" replace />;
  }

  // If not authorized, allow access to the reset password page
  return children;
};

export default ForgotPassProtector;
