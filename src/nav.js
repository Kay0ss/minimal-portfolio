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
        <NavLink to="/" activeClassName="active1" id="nav-btn1">
          Home
        </NavLink>
        <NavLink to="/About" activeClassName="active2" id="nav-btn2">
          About
        </NavLink>
        <NavLink to="/Projects" activeClassName="active3" id="nav-btn3">
          Projects
        </NavLink>
        <NavLink to="/Tools" activeClassName="active4" id="nav-btn4">
          Tools
        </NavLink>
        <div className="animation"></div>
      </div>
      <h1 className="nav-contact">contact</h1>
    </div>
  );
}

export default nav;
