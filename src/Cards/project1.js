import React from "react";
import "./cards.css";
import Proj1 from "../images/project1-bg.png";
import { BsArrowUpRight } from "react-icons/bs"


function Project1() {
  return (
    <div className="box">
      <div className="proj-1" style={{height: '100%'}}>
        <img className="proj-bg-tall" src={Proj1} alt="..." />
        <a className="arrow-btn-long" href="https://www.linkedin.com/in/jacktheisen/" target="_blank"><p className="btn-text">Projects</p><BsArrowUpRight /></a>
      </div>
    </div>
  );
}

export default Project1;
