import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="Badges__hero">
          <div className="Badges__container">
            <div className="Badges_conf-logo">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conference logo"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
