/* const element = document.createElement("h1");
element.innerHTML = "Hello, platzi Badgest!";

const container = document.getElementById("root");

container.appendChild(element);
 */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew.js";
import Navbar from "./components/Navbar";

//const element = <h1>Hello, platzi Badgest! </h1>;
const container = document.getElementById("root");

ReactDOM.render(<BadgeNew />, container);
