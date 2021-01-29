import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Skeleton from "react-loading-skeleton";
import palziConf from "../images/badge-header.svg";
import Gravatar from "./Gravatar";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    console.log(this.props.loadingEdit);
    let imag;
    let paragraph;
    let firstName;
    let lastName;
    let email;
    let jobTitle;
    let twitter;

    if (this.props.loadingEdit === true) {
      imag = <Skeleton circle={true} height={80} width={80} />;
      paragraph = <Skeleton />;
    } else {
      imag = <Gravatar className="Badge__avatar" email={this.props.email} />;
      firstName = this.props.firstName;
      lastName = this.props.lastName;
      email = this.props.email;
      jobTitle = this.props.jobTitle;
      twitter = this.props.twitter;
    }

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={palziConf} alt="logo platzi badgest" />
        </div>
        <div className="Badge__section-name">
          {imag}

          <h1>
            {firstName || paragraph} <br /> {lastName || paragraph}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p> {jobTitle || paragraph} </p>
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} />@{twitter || paragraph}
          </a>
        </div>
        <div className="Badge__footer">
          <a href="/">Platzi conf</a>
        </div>
      </div>
    );
  }
}

export default Badge;
