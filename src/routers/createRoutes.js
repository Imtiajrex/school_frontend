import React from "react";
import { Route } from "react-router-dom";

const user_role = localStorage.getItem("role");
const permissions = JSON.parse(localStorage.getItem("permissions"));
const createRoutes = (routes) =>
  routes.map((prop, key) =>
    checkPermission(prop.permission) ? (
      prop.children === undefined ? (
        <Route exact path={prop.layout + prop.path} key={key}>
          <prop.component permission={prop.permission} />
        </Route>
      ) : (
        createRoutes(prop.children)
      )
    ) : null
  );

const checkPermission = (route_permission) => {
  if (route_permission == undefined) return true;
  else if (user_role == "Super Admin") return true;
  else {
    const found = Object.values(route_permission).some(
      (element) => permissions.indexOf(element) != -1
    );
    console.log(found);
    return found;
  }
};
export default createRoutes;
