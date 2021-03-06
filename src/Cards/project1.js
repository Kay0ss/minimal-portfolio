import React from "react";
import "./cards.css";
import Proj1 from "../images/project1-bg.png";
import Proj1phone from "../images/project1-phone.png";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Project1() {
  return (
    <div className="box">
      <div className="proj-1" style={{ height: "100%" }}>
        <img className="proj-bg-tall" src={Proj1} alt="..." />
        <img className="proj-tall" src={Proj1phone} alt="phone" />
        <Link className="arrow-btn-long" to="/Projects">
          <BsArrowUpRight />
          <p className="btn-text">Projects</p>
        </Link>
      </div>
    </div>
  );
}

export default Project1;
