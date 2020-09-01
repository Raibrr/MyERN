import React from "react";
import palziConf from "../images/badge-header.svg";
import "../stayles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={palziConf} alt="logo platzi badgest" />
        </div>
        <div className="Badge__section-name">
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
          <img src="" alt="Avatar" className="Badge__avatar" />
        </div>
        <div className="Badge__section-info">
          <p> {this.props.jobTitle} </p>
          <a href="#">@{this.props.twitter}</a>
        </div>
        <div className="Badge__footer">
          <a href="#">Platzi conf</a>
        </div>
      </div>
    );
  }
}

export default Badge;
