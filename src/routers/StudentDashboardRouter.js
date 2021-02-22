import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import createRoutes from "./createRoutes";
import student_routes from "routes/student_routes";
export default function StudentDashboardRouter() {
  let history = useHistory();
  const user_type = localStorage.getItem("user_type", "");
  return (
    <>
      {user_type !== "student" ? (
        history.push("/")
      ) : (
        <Switch>
          <Route exact path="/student">
            <Redirect to="/student/dashboard" />
          </Route>

          {createRoutes(student_routes)}
        </Switch>
      )}
    </>
  );
}
