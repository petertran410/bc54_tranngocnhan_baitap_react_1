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
                <button>Home</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
