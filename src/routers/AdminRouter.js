import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import routes from "routes/routes";
import createRoutes from "./createRoutes";
export default function AdminRouter({ menu_list }) {
  let history = useHistory();
  const user_type = localStorage.getItem("user_type", "");
  return (
    <>
      {user_type !== "admin" ? (
        history.push("/")
      ) : (
        <Switch>
          <Route exact path="/admin">
            <Redirect to="/admin/dashboard" />
          </Route>
          {createRoutes(routes)}
        </Switch>
      )}
    </>
  );
}
