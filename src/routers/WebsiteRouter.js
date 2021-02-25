import Index from "components/website/Index";
import React from "react";
import { Route, Switch } from "react-router";
import AuthRouter from "./AuthRouter";

export default function WebsiteRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/admin">
          <AuthRouter />
        </Route>
        <Route exact path="/login">
          <AuthRouter />
        </Route>
        <Route exact path="/admin/*">
          <AuthRouter />
        </Route>
        <Route exact path="/student">
          <AuthRouter />
        </Route>
        <Route exact path="/teacher">
          <AuthRouter />
        </Route>
        <Route exact path="/student/*">
          <AuthRouter />
        </Route>
        <Route exact path="/teacher/*">
          <AuthRouter />
        </Route>
        <Route path="/print">
          <AuthRouter />
        </Route>
        <Route exact path="/*">
          <Index />
        </Route>
      </Switch>
    </>
  );
}
