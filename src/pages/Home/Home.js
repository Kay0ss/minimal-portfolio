import * as React from "react";
import "./home.css";
// import 'mapbox-gl/dist/mapbox-gl.css';
import Intro from "../../Cards/intro";
import About from "../../Cards/about";
import Map from "../../Cards/map.js";
import Project1 from "../../Cards/project1";
import DarkMode from "../../Cards/darkmode";
import Linkedin from "../../Cards/linkedin.js";
import Project2 from "../../Cards/project2.js";
import Github from "../../Cards/github.js";
import Project3 from "../../Cards/project3.js";
import Contact from "../../Cards/contact.js";
// import Nav from "./test-nav.js";

function Home() {
  return (
    <>
      {/* <Nav /> */}
      <div class="wrapper">
        <Intro />
        <Map />
        <Project1 />
        <DarkMode />
        <Linkedin />
        <Project2 />
        <Github />
        <About />
        <Project3 />
        <Contact />
      </div>
    </>
  );
}

export default Home;
