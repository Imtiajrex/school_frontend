/* eslint-disable no-unused-vars */
import AttendanceReportMonth from "components/students/attendance/AttendanceReportMonth";
import StudentsAttendanceReportDay from "components/students/attendance/StudentsAttendanceReportDay";
import Dashboard from "components/students/Dashboard";
import AppMessage from "components/students/message/AppMessage";
import DuePayment from "components/students/payments/due_payment/DuePayment";
import PaymentReceipt from "components/students/payments/PaymentReceipt";
import PaymentReport from "components/students/payments/PaymentReport";
import ResultPublishing from "components/students/results/ResultPublishing";
import React from "react";
import { Redirect } from "react-router-dom";

const student_routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "fas fa-columns text-primary",
    layout: "/student",
    component: Dashboard,
  },
  {
    name: "My Info",
    path: "/students",
    children: [
      {
        name: "Attendance Report(Day)",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/student/students",
        component: StudentsAttendanceReportDay,
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/student/students",
        component: AttendanceReportMonth,
      },
      {
        name: "My Messages",
        path: "/messages",
        icon: "fas fa-link",
        layout: "/student/students",
        component: AppMessage,
      },
    ],
    icon: "fas fa-graduation-cap text-warning",
    layout: "/student",
    component: <Redirect to="/student/dashboard" />,
  },

  {
    name: "Result",
    path: "/result",
    icon: "fas fa-file-alt text-success",
    layout: "/student",
    component: ResultPublishing,
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
        component: PaymentReceipt,
      },
      {
        name: "Payment Report",
        path: "/report",
        icon: "fas fa-link",
        layout: "/student/payment",
        component: PaymentReport,
      },
      {
        name: "Due Payment",
        path: "/due",
        icon: "fas fa-link",
        layout: "/student/payment",
        component: DuePayment,
      },
    ],
    icon: "fas fa-money-bill-alt text-danger",
    layout: "/student",
    component: <Redirect to="/student/dashboard" />,
  },
];
export default student_routes;
