import React from "react";
import "./footbar.scss";
import { BiCopyright } from "react-icons/bi";

const Footbar = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="footbar">
            <div className="footbar__name">Copyright</div>
            <div className="footbar__icon">
              <BiCopyright />
            </div>
            <div className="footbar__desc">Your Website 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footbar;
