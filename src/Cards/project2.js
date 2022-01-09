import React from "react";
import "./cards.css";
import proj2 from "../images/project2-bg.png";
import { FaHtml5, FaSass, FaBootstrap, FaGit, FaJsSquare, FaReact, FaCss3Alt, FaFigma, FaNodeJs } from "react-icons/fa";

function Project2() {
  return (
    <div className="box">
      <div>
        <img className="proj-bg-tall" src={proj2} alt="..." />
        <div className="skills-box">
            {/* <FaBootstrap /> */}
            <FaCss3Alt />
            <FaHtml5 />
            <FaJsSquare />
            <FaFigma />
            <FaGit />
            <FaNodeJs />
            <FaReact />
            <FaSass />
        </div>
      </div>
    </div>
  );
}

export default Project2;
