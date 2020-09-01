import React from "react";
import Navbar from "../components/Navbar.js";
import "../stayles/BadgeNew.css";
import badge_header from "../images/badge-header.svg";
import Badge from "../components/components.js";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <div className="BadgeNew__hero">
            <img className="img-fluid" src={badge_header} alt="Badge_header" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Ramón"
                lastName="Ibarra"
                jobTitle="Student of JavaScript"
                twitter="No tengo xd"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
