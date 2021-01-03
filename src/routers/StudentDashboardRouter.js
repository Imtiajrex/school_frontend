import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import MainBoard from "../components/dashboard/MainBoard";
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
          <Route exact path="/student/dashboard">
            <MainBoard />
          </Route>
        </Switch>
      )}
    </>
  );
}
