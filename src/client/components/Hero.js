import React from "react";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/Badges.css";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="Badges__hero">
          <div className="Badges__container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-10">
                <img
                  className="img-fluid"
                  src={confLogo}
                  alt="Conference logo"
                />
              </div>
              <h1 className="text-light col-2">{this.props.badgeName}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
