import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import "../App.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="titile">Where in the world?</div>
      <div className="themeContainer">
        <HiOutlineMoon className="themeIcon" />
        <div className="themeText">Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
