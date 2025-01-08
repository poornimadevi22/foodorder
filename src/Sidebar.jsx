import React,{useState} from 'react';
 import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers ,faPercent} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const[activeTab, setActivetab]=useState("dashboard");
  const navigate = useNavigate();

 const setActive = (tab) => {
  setActivetab(tab);
  navigate(tab);

  };

  return (
    <>
     <div className="container">
    <nav className="col-2 sidebar">
     <header className='side'>     
  <img src="/src/assets/logo 1.png" alt="img" className="logo"></img>
  </header>
          <ul>
          <li className={activeTab === 'dashboard' ? 'active' : ''}><a className={activeTab==='dashboard'?'active':''} onClick={() => setActive("dashboard","/dash")}><i className={`bi bi-grid ${activeTab === "dashboard" ? "active-icon" : ""}`} ></i> Dashboard</a></li>
            <li className={activeTab === 'customer' ? 'active' : ''}><a className={activeTab === 'customer' ? 'active' : ''} onClick={() => setActive("customer","/customer")}><i className={`bi bi-people ${activeTab === "customer" ? "active-icon" : ""}`} ></i>Customer</a></li>
            <li className={activeTab === 'order' ? 'active' : ''}><a className={activeTab === 'order' ? 'active' : ''} onClick={() => setActive("order","/order")}><i className={`bi bi-menu-down ${activeTab === "order" ? "active-icon" : ""}`} ></i>Order</a></li>
            <li className={activeTab === 'branch' ? 'active' : ''}><a className={activeTab === 'branch' ? 'active' : ''} onClick={() => setActive("branch","/branch")} ><i className={`bi bi-geo-alt ${activeTab === "branch" ? "active-icon" : ""}`} ></i>Branch</a></li>
            <li className={activeTab === 'merchant' ? 'active' : ''}><a className={activeTab === 'merchant' ? 'active' : ''} onClick={() => setActive("merchant","/merchant")}><i className={`bi bi-shop ${activeTab === "merchant" ? "active-icon" : ""}`} ></i>Merchant</a></li>
            <li className={activeTab === 'discounts' ? 'active' : ''}><a className={activeTab === 'discounts' ? 'active' : ''} onClick={() => setActive("discounts","/disc")} ><i className={`bi bi-percent ${activeTab === "discounts" ? "active-icon" : ""}`} ></i>Discounts</a></li>
            <li className={activeTab === 'settings' ? 'active' : ''}><a className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActive("settings","/settings")}><i className={`bi bi-gear ${activeTab === "settings" ? "active-icon" : ""}`} ></i>Settings</a></li>
            <li className={activeTab === 'signout' ? 'active' : ''}><a className={activeTab === 'signout' ? 'active' : ''}onClick={() => setActive("signout","/signout")} ><i className={`bi bi-box-arrow-right ${activeTab === "signout" ? "active-icon" : ""}`} ></i>SignOut</a></li>
          </ul>
          </nav> 
          </div> 
          </>




  )
}

export default Sidebar