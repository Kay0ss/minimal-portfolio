import React from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";

// function addClass() {
//   document.getElementById("about").classList.add("clicked");
// }

function nav() {
  return (
    <div className="nav-container">
      <Link to="/" className="logo">jack</Link>
      <div className="navbar">
        <NavLink to="/" activeClassName="active" id="nav-btn">
          Home
        </NavLink>
        <NavLink to="/About" id="nav-btn">
          About
        </NavLink>
        <NavLink to="/Projects" id="nav-btn">
          Projects
        </NavLink>
         <NavLink to="/Tools" id="nav-btn">
          Tools
        </NavLink>
      </div>
      <h1 className="nav-contact">contact</h1>
    </div>
  );
}

export default nav;
