import React, { useState, useEffect } from "react";
import "../App.scss";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.getElementById("themeLight").style.display = "none";
      document.getElementById("themeDark").style.display = "block";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.getElementById("themeDark").style.display = "none";
      document.getElementById("themeLight").style.display = "block";
    }
  }, [darkMode]);
  return (
    <div
      className="themeContainer"
      onClick={() =>
        darkMode === false ? setDarkMode(true) : setDarkMode(false)
      }
    >
      <HiOutlineMoon className="themeIcon" id="themeLight" />
      <HiMoon className="themeIcon" id="themeDark" />
      <div className="themeText">Dark Mode</div>
    </div>
  );
};

export default Theme;
