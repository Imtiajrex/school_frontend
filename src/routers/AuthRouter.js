import React from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router"; /*
import AdminDashboard from "../pages/admin/AdminDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";*/
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/dashboard/Dashboard";

export default function AuthRouter() {
  const token = localStorage.getItem("token", "");
  const user_type = localStorage.getItem("user_type", "");
  const allowed_user_types = ["admin", "student", "teacher"];

  return (
    <>
      <Switch>
        <Route exact path="/login">
          {token === "" && allowed_user_types.includes(user_type) ? (
            <Redirect to={"/" + user_type + "/dashboard"} />
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        {/*
        <Route path="/student">
          <StudentDashboard />
        </Route>
        <Route path="/teacher">
          <TeacherDashboard />
        </Route>
        */}
      </Switch>
    </>
  );
}
