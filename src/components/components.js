import React from "react";
import palziConf from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={palziConf} alt="logo platzi badgest" />
        </div>
        <div>
          <h1>
            Ramón <br /> Ibarra
          </h1>
          <img src="" alt="Avatar" />
        </div>
        <div>
          <p>Estudiante de JavaScript</p>
          <a href="#">@twitter</a>
        </div>
        <div>
          <a href="#">Platzi conf</a>
        </div>
      </div>
    );
  }
}

export default Badge;
