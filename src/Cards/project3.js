import React from "react";
import "./cards.css";
import proj3 from "../images/project3-bg.png";
import { BsArrowUpRight } from "react-icons/bs";

function Project3() {
  return (
    <div className="box">
      <div className="proj-container">
        {/* <img className="proj-bg-long" src={proj3} alt="..." /> */}
        
        <a
          className="arrow-btn-long"
          href="https:www.jackt.xyz"
          target="_blank"
        >
          <BsArrowUpRight />
          <p className="btn-text">Old Site</p>
        </a>
      </div>
    </div>
  );
}

export default Project3;
