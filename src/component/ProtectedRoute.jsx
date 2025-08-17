import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  let user = localStorage.getItem("user");
  user = user ? JSON.parse(user) : null;

  if (!user || user.role !== allowedRole) {
   
    return <Navigate to="/" replace />;
  }

  return children;
}
