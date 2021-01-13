import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeHome from "../pages/BadgeHome";
import Navbar from "./Navbar";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badge/new" component={BadgeNew} />
        <Route exact path="/" component={BadgeHome} />
        <Route path="/404" component={NotFound} />
        <Redirect form="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
