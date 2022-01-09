import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";
import "./cards.css";

  const DarkMode = () => {
      const cards = document.getElementsByClassName("box")
    const darkMode = useDarkMode(false);
    return (
      <div className="box darkmode">
        <DarkModeToggle
          className="dm-toggle"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={130}
          element={document.cards}
        />

        
      </div>
    );
  };


export default DarkMode;
