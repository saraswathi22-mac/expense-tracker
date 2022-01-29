import React from "react";
import './navigation.css'

const Navigation = () => {
  return (
    <div className="navigationBar">
      <div className="logo">
        <img
          className="logoImage"
          src="../images/logos/logocoloured.png"
          alt=""
        />
      </div>
      <div className="app-name">
        <h1>World Heritage Sites of India</h1>
      </div>
      <div className="dropdownMenu">
        <div className="dropdownIcon">
          <div className="bar  second"></div>
          <div className="bar third"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
