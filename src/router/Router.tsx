import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Top from "../screens/Top";
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
