import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Branch from "./Branch";
import Customer from "./Customer";
import Settings from "./Settings";
import Signout from "./Signout";
import Order from "./Order";
import Merchant from "./Merchant";
import Discounts from "./Discounts";
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";

function App() {
   const tokens = localStorage.getItem("token");
   
  return (
    <BrowserRouter>
     
      {tokens==="tokken" ? <Sidebar />:null}
      {tokens==="tokken" ? <Header />:null} 

      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected routes */}
        {tokens==="tokken" ?
        <>
          <Route path="/customer" element={<Customer />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/disc" element={<Discounts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/signout" element={<Signout />} >
          </Route>
          </> :null
          
      }

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
