import "./about.css";
import me from "../../images/meLaptop.png";
import ValLogo from "../../images/Valorem-Logo.png";
import Photoshop from "../../images/photoshop.png";
import Html from "../../images/Html.png";
import Css from "../../images/css.png";
import Bootstrap from "../../images/bootstrap.png";
import javascript from "../../images/javascript.png";
import React from "../../images/react.png";

function About() {
  return (
    <>
      <div className="box container">
        <img className="me" src={me} alt="me" />
        &nbsp;
        <p>
          I'm <span className="jack">jack</span>, I'm a full stack web developer
          from Minneapolis. I'm interested in Web Development, Design, Startups,
          and Creative Projects.
        </p>
        &nbsp;
        <p>
          From the moment I produced "Hello World" on a simple html web-app, I
          knew I was hooked into the world of web development. Web development
          has never been "just a job" for me, it's offered an engaging challenge
          to continually learn and improve my skills in creating high-quality
          web applications. What started with a simple "Hello World" has become
          a full-fledged passion that only gets more exciting as time goes by.
        </p>
      </div>
      <div className="experiences">
        <h3 className="experiences-title">Experience</h3>
        &nbsp;
        <div className="experiences-container">
          <img
            src={ValLogo}
            alt="Valorem Logo"
            className="experiences-logo"
            width={"70px"}
            height={"70px"}
          />
          &nbsp; &nbsp;
          <div className="experiences-content">
            <h6 className="job-content" style={{fontWeight: "bold"}}>Junior Front-End Developer</h6>
            <h5 className="job-content">Valorem Foundation</h5>
            <h6 className="job-content">Dec 2021 - Present</h6>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1 className="skills-title">Tools I use everyday</h1>
        &nbsp;
        <div className="skills-content">
          <img src={Photoshop} alt="Photoshop" className="skills-logo" style={{borderRadius: "10px"}} />
          {/* <img src={Illustrator} alt="Illustrator" className="skills-logo" /> */}
          <img src={Html} alt="HTML" className="skills-logo" />
          <img src={Css} alt="CSS" className="skills-logo" />
          <img src={Bootstrap} alt="Bootstrap" className="skills-logo" />
          <img src={javascript} alt="Javascript" className="skills-logo" />
          <img src={React} alt="React" className="skills-logo" />
          <br />
          <br />
        </div>
      </div>

    </>
  );
}

export default About;
