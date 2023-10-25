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
              <li className="active">
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contract</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
