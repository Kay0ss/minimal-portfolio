import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Tools from "./tools";

// import { UserContext, UserProvider } from "./utils/UserContext";


export default function App() {

  return (
    //   <UserProvider>
        <div>
          <Router>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/tools" element={<Tools />} />
            </Routes>
          </Router>
        </div>
    //   </UserProvider>
  );
}
