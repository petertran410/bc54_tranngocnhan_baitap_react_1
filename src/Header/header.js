import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="title__name">Start Bootstrap</div>
          <div className="title__menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contract</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
