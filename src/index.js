/* const element = document.createElement("h1");
element.innerHTML = "Hello, platzi Badgest!";

const container = document.getElementById("root");

container.appendChild(element);
 */

import React from "react";
import ReactDOM from "react-dom";
import "./global.css"
import "bootstrap/dist/css/bootstrap.css";
import App from './components/App'

//const element = <h1>Hello, platzi Badgest! </h1>;
const container = document.getElementById("root");

ReactDOM.render(<App />, container);
