import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

// function addClass() {
//   document.getElementById("about").classList.add("clicked");
// }

function nav() {
  return (
    <div className="nav-container">
      <Link to="/" className="logo">jack</Link>
      <div className="navbar">
        <Link to="/" id="nav-btn">
          Home
        </Link>
        <Link to="/About" id="nav-btn">
          About
        </Link>
        <Link to="/Projects" id="nav-btn">
          Projects
        </Link>
         <Link to="/Tools" id="nav-btn">
          Tools
        </Link>
      </div>
      <h1 className="nav-contact">contact</h1>
    </div>
  );
}

export default nav;
