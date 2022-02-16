import React from "react";
import "./cards.css";
import Toolsbg from "../images/Tools-bg.png";
import Toolscontent from "../images/Tools-content.png";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Project2() {
  return (
    <div className="box">
      <div style={{height : '100%'}} className="home-tools">
        <img className="proj-bg-tall" src={Toolsbg} alt="..." />
        <img className="proj-tall" src={Toolscontent} alt="..." />

        <div>
        <Link className="arrow-btn-long" to="/Tools">
          <BsArrowUpRight />
          <p className="btn-text">Tools</p>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Project2;
