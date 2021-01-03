import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import MainBoard from "../components/dashboard/MainBoard";
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
          <Route exact path="/teacher/dashboard">
            <MainBoard />
          </Route>
        </Switch>
      )}
    </>
  );
}
