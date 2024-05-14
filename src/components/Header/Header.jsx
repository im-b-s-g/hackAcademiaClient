/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import HaLogo from "../../assets/removed Logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Left">
        <img src={HaLogo} alt="Logo.png" />
      </div>
      <div className="Header-Right">
        <h1>The Best Academic Partner For You</h1>
      </div>
    </div>
  );
};

export default Header;
