import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Tools from "./pages/Tools/tools";

// import { UserContext, UserProvider } from "./utils/UserContext";


export default function App() {

  return (
    //   <UserProvider>
        <div>
          <Router>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </Router>
        </div>
    //   </UserProvider>
  );
}
