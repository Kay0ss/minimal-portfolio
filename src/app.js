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
              <Route exact path="/minimal-portfolio" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </Router>
        </div>
    //   </UserProvider>
  );
}
