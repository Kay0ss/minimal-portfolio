import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";
import "./cards.css";
import Map from "./map.js";

function MapSwitch() {
  document.getElementById("light").classList.add("hidden");
  // document.getElementById("dark").classList.remove("hidden");
}

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


      </div>
    );
  };


export default DarkMode;
