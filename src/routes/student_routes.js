/* eslint-disable no-unused-vars */
import Index from "components/crud/Index";
import StudentsAttendanceMonth from "components/print/students/attendance_month/StudentsAttendanceMonth";
import AttendanceReportMonth from "components/students/attendance/AttendanceReportMonth";
import StudentsAttendanceReportDay from "components/students/attendance/StudentsAttendanceReportDay";
import AppMessage from "components/students/message/AppMessage";
import DuePayment from "components/students/payments/due_payment/DuePayment";
import PaymentReceipt from "components/students/payments/PaymentReceipt";
import PaymentReport from "components/students/payments/PaymentReport";
import React from "react";
import { Redirect } from "react-router-dom";

const student_routes = [
  {
    name: "My Info",
    path: "/students",
    children: [
      {
        name: "Attendance Report(Day)",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/student/students",
        component: <StudentsAttendanceReportDay />,
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/student/students",
        component: <AttendanceReportMonth />,
      },
      {
        name: "My Messages",
        path: "/messages",
        icon: "fas fa-link",
        layout: "/student/students",
        component: <AppMessage />,
      },
    ],
    icon: "fas fa-graduation-cap text-warning",
    layout: "/student",
    component: <Redirect to="/student/dashboard" />,
  },

  {
    name: "Result",
    path: "/result",
    children: [
      {
        name: "Result Card",
        path: "/card",
        icon: "fas fa-link",
        layout: "/student/results",
        component: <Index />,
      },
      {
        name: "Marksheet",
        path: "/marksheet",
        icon: "fas fa-link",
        layout: "/student/results",
        component: <Index />,
      },
    ],
    icon: "fas fa-file-alt text-success",
    layout: "/student",
    component: <Redirect to="/student/dashboard" />,
  },
  {
    name: "Payment",
    path: "/student/payment",
    children: [
      {
        name: "Payment Receipt",
        path: "/receipt",
        icon: "fas fa-link",
        layout: "/student/payment",
        component: <PaymentReceipt />,
      },
      {
        name: "Payment Report",
        path: "/report",
        icon: "fas fa-link",
        layout: "/student/payment",
        component: <PaymentReport />,
      },
      {
        name: "Due Payment",
        path: "/due",
        icon: "fas fa-link",
        layout: "/student/payment",
        component: <DuePayment />,
      },
    ],
    icon: "fas fa-money-bill-alt text-danger",
    layout: "/student",
    component: <Redirect to="/student/dashboard" />,
  },
];
export default student_routes;
