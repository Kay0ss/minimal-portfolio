import React from "react";
import { FaBlog } from "react-icons/fa";
import "./cards.css";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="box">
      <div className="contact-container">
        <h1 className="contact-header">Let's work on something together!</h1>
        <br />
        <p className="contact-content">I accept freelance jobs, collaborating with companies, individuals, startups, and brands.</p>
        <a href="mailto: jackschoolbiz@gmail.com?subject=Portfolio Inquiry" className="arrow-btn-contact">
          <BsArrowUpRight />
          <p className="">Let's talk</p>
        </a>
        
      </div>
    </div>
  );
}

export default Contact;
