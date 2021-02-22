import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";

import teacher_routes from "routes/teacher_routes";
import createRoutes from "./createRoutes";
export default function TeacherDashboardRouter() {
  let history = useHistory();
  const user_type = localStorage.getItem("user_type", "");
  return (
    <>
      {user_type !== "teacher" ? (
        history.push("/")
      ) : (
        <Switch>
          <Route exact path="/teahcer">
            <Redirect to="/teacher/dashboard" />
          </Route>

          {createRoutes(teacher_routes)}
        </Switch>
      )}
    </>
  );
}
