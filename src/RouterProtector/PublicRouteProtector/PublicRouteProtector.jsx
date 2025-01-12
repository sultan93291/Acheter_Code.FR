import { AuthContext } from "@/Provider/AuthProvider/AuthProvider";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PubliceRouteProtector = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If authenticated, redirect to dashboard or another default page
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PubliceRouteProtector;
