// DarkModeToggle.js

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if dark mode is set in local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Update the HTML body class based on dark mode state
    document.body.classList.toggle("dark-mode", isDarkMode);

    // Save dark mode preference to local storage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <FontAwesomeIcon
          className="mko"
          icon={faSun}
          title="Switch to Light Mode"
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        /> // Use the sun icon for light mode
      ) : (
        <FontAwesomeIcon
          title="Switch to Dark Mode"
          icon={faMoon}
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        /> // Use the moon icon for dark mode
      )}
    </div>
  );
};

export default DarkModeToggle;
