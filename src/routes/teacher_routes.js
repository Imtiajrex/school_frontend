/* eslint-disable no-unused-vars */
import React from "react";
import { Redirect } from "react-router-dom";

import AttendanceReportDay from "components/teachers/employee_attendance/AttendanceReportDay";
import AttendanceReportMonth from "components/teachers/employee_attendance/AttendanceReportMonth";
import { ExamCrud } from "components/teachers/exams/Exams";
import { Marks } from "components/teachers/exams/Exams";
import { Tabulation } from "components/dashboard/exams/Exams";
import ManualAttendance from "components/teachers/students/manual_attendance/ManualAttendance";
import StudentAppMessage from "components/teachers/message/StudentAppMessage";
import EmployeeAppMessage from "components/teachers/message/EmployeeAppMessage";
import Dashboard from "components/teachers/Dashboard";

const teacher_routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "fas fa-columns text-primary",
    layout: "/teacher",
    component: Dashboard,
  },
  {
    name: "Students",
    path: "/students",
    children: [
      {
        name: "Students Manual Attendance",
        path: "/student_manual_attendance",
        icon: "fas fa-link",
        layout: "/teacher/students",
        component: ManualAttendance,
      },
    ],
    icon: "fas fa-notes-medical text-info",
    layout: "/teacher",
    component: <Redirect to="/teacher/dashboard" />,
  },
  {
    name: "Employee",
    path: "/employees",
    children: [
      {
        name: "Attendance Report(Day)",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/teacher/employees",
        component: AttendanceReportDay,
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/teacher/employees",
        component: AttendanceReportMonth,
      },
    ],
    icon: "fas fa-briefcase text-default",
    layout: "/teacher",
    component: <Redirect to="/teacher/dashboard" />,
  },
  {
    name: "Exam",
    path: "/exams",
    children: [
      {
        name: "Exam CRUD",
        path: "/exam",
        icon: "fas fa-link",
        layout: "/teacher/exams",
        component: ExamCrud,
      },
      {
        name: "Marks CRUD",
        path: "/marks",
        icon: "fas fa-link",
        layout: "/teacher/exams",
        component: Marks,
      },
      {
        name: "Tabulation Sheet",
        path: "/tabulation",
        icon: "fas fa-link",
        layout: "/teacher/exams",
        component: Tabulation,
      },
    ],
    icon: "fas fa-notes-medical text-info",
    layout: "/teacher",
    component: <Redirect to="/teacher/dashboard" />,
  },

  {
    name: "Mesasge",
    path: "/messages",
    children: [
      {
        name: "Student App Message",
        path: "/app_message",
        icon: "fas fa-link",
        layout: "/teacher/messages",
        component: StudentAppMessage,
      },
      {
        name: "My Messages",
        path: "/my_messages",
        icon: "fas fa-link",
        layout: "/teacher/messages",
        component: EmployeeAppMessage,
      },
    ],
    icon: "fas fa-envelope text-success",
    layout: "/teacher",
    component: <Redirect to="/teacher/dashboard" />,
  },
];
export default teacher_routes;
