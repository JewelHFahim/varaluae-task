import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Group 114.png"

const Navbar = () => {


  return (
    <div>
      <nav className="navbar">
        <div className="logo"><img src={logo} alt=""/></div>
        <ul class="nav-links">
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li class="services"><a href="/">Services</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/" className="start-btn">Start a Company</a></li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
