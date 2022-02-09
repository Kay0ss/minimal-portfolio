import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";
import "./cards.css";
import Map from "./map.js";

const DarkMode = () => {
      const cards = document.getElementsByClassName("box")
      const darkMode = useDarkMode(false);
    return (
      <div className="box darkmode">
        <DarkModeToggle
          className="dm-toggle"
          id="dm-btn"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={110}
          element={document.cards}
        >

        </DarkModeToggle>
        <button onClick={console.log("yup")}>log</button>
      </div>
    );

  };


export default DarkMode;
