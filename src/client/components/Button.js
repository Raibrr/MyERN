import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {
  render() {
    const { className, text, redirect } = this.props;
    return (
      <>
        <div className="d-flex justify-content-center">
          <Link
            to={`/badge/${redirect}`}
            className="text-reset text-decoration-none"
          >
            <button className={className}>{text}</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Button;
