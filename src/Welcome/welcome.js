import React from "react";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div>
      <div className="welcome">
        <div className="container">
          <div className="welcome__box text-center">
            <div className="welcome__box--title">A warm welcome!</div>
            <div className="welcome__box--desc">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </div>
            <button className="btn btn-primary welcome__box--button">
              Call to action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
