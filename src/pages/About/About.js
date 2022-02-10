import react from "react";
import "./about.css";
import me from "../../images/meLaptop.png";

function About() {
  return (
    <div className="wrapper">
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

        <p></p>
      </div>
    </div>
  );
}

export default About;
