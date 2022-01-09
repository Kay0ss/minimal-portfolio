import React from "react";
import "./cards.css";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs"


function Github() {
    return(
        <div className="box">
            <div className="github">
                <FaGithub />
                <a className="arrow-btn" href="https://github.com/Kay0ss" target="_blank"><BsArrowUpRight /></a>
            </div>
        </div>
    )
}

export default Github;