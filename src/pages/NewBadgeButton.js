import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewBadgeButton extends React.Component {
  render() {
    return (
      <>
        <div className="Badges__buttons">
          <Link to="/badge/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
      </>
    );
  }
}

export default NewBadgeButton;
