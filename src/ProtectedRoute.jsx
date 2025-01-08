import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "./Login";


function ProtectedRoute() {

  const token = localStorage.getItem("token");


  return token ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
