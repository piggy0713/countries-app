import React, { useEffect, useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import "../App.scss";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="header">
      <div className="titile">Where in the world?</div>
      <div
        className="themeContainer"
        onClick={() =>
          darkMode === false ? setDarkMode(true) : setDarkMode(false)
        }
      >
        <HiOutlineMoon className="themeIcon" />
        <div className="themeText">Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
