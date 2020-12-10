/* const element = document.createElement("h1");
element.innerHTML = "Hello, platzi Badgest!";

const container = document.getElementById("root");

container.appendChild(element);
 */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Badgests from './pages/Badgests'
import "./global.css"

//const element = <h1>Hello, platzi Badgest! </h1>;
const container = document.getElementById("root");

ReactDOM.render(<Badgests />, container);
