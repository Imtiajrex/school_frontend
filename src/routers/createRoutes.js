import React from "react";
import { Route } from "react-router-dom";

const createRoutes = (routes) => {
  return routes.map((prop, key) => {
    return prop.children === undefined ? (
      <Route exact path={prop.layout + prop.path} key={key}>
        {prop.component}
      </Route>
    ) : (
      createRoutes(prop.children)
    );
  });
};

export default createRoutes;
