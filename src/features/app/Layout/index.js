import React from "react";
import { Link } from "react-router-dom";
import './Layout.css';


const Layout=({ children })=>{
  return(
    <div>
      <div class="navbar">
        <div class="navbar-container container">
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appsettings">App Settings</Link></li>
          </ul>
          <h1 class="logo">Basic Table</h1>
        </div>
      </div>
      <div className="body-container">
        { children }
      </div>
    </div>
  );
}

export default Layout;