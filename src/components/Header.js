import React from "react";
import Theme from "./Theme";
import "../App.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="titile">Where in the world?</div>
      <Theme />
    </div>
  );
};

export default Header;
