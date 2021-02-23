import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeView from "../pages/BadgeView";
import BadgeHome from "../pages/BadgeHome";
import Navbar from "./Navbar";
import NotFound from "../pages/NotFound";
import BadgeDetails from "../pages/BadgeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route
          exact
          path="/badge/new"
          render={(props) => (
            <BadgeView
              {...props}
              formTitle={`New Attendant`}
              loadingEdit={false}
            />
          )}
        />
        <Route
          exact
          path="/badge/:badgeId/edit"
          render={(props) => (
            <BadgeView
              {...props}
              formTitle={`Edit Attendant`}
              inEditing={true}
            />
          )}
        />
        <Route exact path="/badge/:badgeId" component={BadgeDetails} />
        <Route exact path="/" component={BadgeHome} />
        <Route path="/404" component={NotFound} />
        <Redirect form="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
