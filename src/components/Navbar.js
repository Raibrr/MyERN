import React from "react";
import logo__Nav from "../images/logo.svg";
import "../stayles/nabvar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a href="#" className="Navbar__brand">
            <img src={logo__Nav} alt="" className="Navbar__brand-logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
