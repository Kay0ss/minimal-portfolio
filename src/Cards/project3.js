import React from "react";
import "./cards.css";
import proj3 from "../images/project3-content.png";
import { BsArrowUpRight } from "react-icons/bs";

function Project3() {
  return (
    <div className="box">
      <div className="proj-container">
        <img className="proj-bg" src={proj3} alt="..." height={"100%"} />        
        <a
          className="arrow-btn-long"
          href="https://kay0ss.github.io/react-portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          <BsArrowUpRight />
          <p className="btn-text">Old Site</p>
        </a>
      </div>
    </div>
  );
}

export default Project3;
