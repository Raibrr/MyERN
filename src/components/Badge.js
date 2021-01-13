import React from "react";
import palziConf from "../images/badge-header.svg";
import Gravatar from "./Gravatar";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={palziConf} alt="logo platzi badgest" />
        </div>
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />

          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p> {this.props.email}</p>
          <p> {this.props.jobTitle} </p>
          <a href="/">@{this.props.twitter}</a>
        </div>
        <div className="Badge__footer">
          <a href="/">Platzi conf</a>
        </div>
      </div>
    );
  }
}

export default Badge;
