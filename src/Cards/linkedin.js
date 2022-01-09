import React from "react";
import "./cards.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs"

function Linkedin() {
  return (
    <div className="box linkedin">
      <div className="box-linkedin">
        <FaLinkedinIn />
        <a className="arrow-btn" href="https://www.linkedin.com/in/jacktheisen/" target="_blank"><BsArrowUpRight /></a>
      </div>
    </div>
  );
}

export default Linkedin;
