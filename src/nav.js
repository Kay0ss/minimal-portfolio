import React from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";

// function addClass() {
//   document.getElementById("about").classList.add("clicked");
// }

function nav() {
  return (
    <div className="nav-container">
      <Link to="/" className="logo">
        jack
      </Link>
      <div className="navbar">
        <NavLink to="/" activeclassname="active1" id="nav-btn1">
          Home
        </NavLink>
        <NavLink to="/About" activeclassname="active2" id="nav-btn2">
          About
        </NavLink>
        <NavLink to="/Projects" activeclassname="active3" id="nav-btn3">
          Projects
        </NavLink>
        <NavLink to="/Tools" activeclassname="active4" id="nav-btn4">
          Tools
        </NavLink>
        <div className="animation"></div>
      </div>
      <a href="mailto: jackschoolbiz@gmail.com?subject=Portfolio Inquiry" id="nav-contact">Contact</a>
    </div>
  );
}

export default nav;
