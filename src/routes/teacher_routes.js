/* eslint-disable no-unused-vars */
import React from "react";
import { Redirect } from "react-router-dom";
import Index from "components/dashboard/settings/Religion";

import AttendanceReportDay from "components/teachers/employee_attendance/AttendanceReportDay";
import AttendanceReportMonth from "components/teachers/employee_attendance/AttendanceReportMonth";
import { ExamCrud } from "components/dashboard/exams/Exams";
import { Marks } from "components/dashboard/exams/Exams";
import { Tabulation } from "components/dashboard/exams/Exams";
import AppMessage from "components/teachers/message/AppMessage";
import MyMessage from "components/teachers/message/MyMessage";
import ManualAttendance from "components/teachers/student_manual_attendance/ManualAttendance";

const teacher_routes = [
  {
    name: "Students",
    path: "/students",
    children: [
      {
        name: "Students Manual Attendance",
        path: "/student_manual_attendance",
        icon: "fas fa-link",
        layout: "/teacher",
        component: <ManualAttendance />,
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
        layout: "/teacher",
        component: <AttendanceReportDay />,
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/teacher",
        component: <AttendanceReportMonth />,
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
        layout: "/teacher",
        component: <ExamCrud />,
      },
      {
        name: "Marks CRUD",
        path: "/marks",
        icon: "fas fa-link",
        layout: "/teacher",
        component: <Marks />,
      },
      {
        name: "Tabulation Sheet",
        path: "/tabulation",
        icon: "fas fa-link",
        layout: "/teacher",
        component: <Tabulation />,
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
        layout: "/teacher",
        component: <AppMessage />,
      },
      {
        name: "My Messages",
        path: "/my_messages",
        icon: "fas fa-link",
        layout: "/teacher",
        component: <MyMessage />,
      },
    ],
    icon: "fas fa-envelope text-success",
    layout: "/teacher",
    component: <Redirect to="/teacher/dashboard" />,
  },
];
export default teacher_routes;
