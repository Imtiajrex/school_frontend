/* eslint-disable no-unused-vars */
import React from "react";
import { Redirect } from "react-router-dom";
import Index from "components/dashboard/settings/Religion";

import {
  Religion,
  Session,
  SchoolClass,
  Department,
  Subject,
  PaymentCategory,
  Permissions,
  Users,
  Roles,
  GPA,
  Grade,
  InstituteInfo,
  AssignSubject,
  EmployeesExtendedInfo,
  StudentsExtendedInfo,
} from "components/dashboard/settings/Settings";

import { BooksCrud } from "components/dashboard/library/Library";

import { ProductCrud } from "components/dashboard/products/Products";

import {
  AccountsCrud,
  AccountsReport,
  AccountBalance,
} from "components/dashboard/accounts/Accounts";

import { ExamCrud, Marks, Tabulation } from "components/dashboard/exams/Exams";

import { ResultCrud } from "components/dashboard/results/Results";

import {
  StudentsCrud,
  AssignClassStudent,
  StudentPaymentFees,
  StudentsDocuments,
  StudentsPhonebook,
  StudentsAttendanceReportDay,
  StudentsAttendanceReportMonth,
} from "components/dashboard/students/Students";

import {
  EmployeeCrud,
  EmployeeTypes,
  EmployeePosts,
} from "components/dashboard/employees/Employees";

import {
  StudentPayment,
  DuePayment,
  PaymentReceipt,
  PaymentReport,
} from "components/dashboard/payments/Payment";
import { ResultPublishing } from "components/dashboard/results/Results";
import AttendanceReportMonth from "components/dashboard/employees/attendance/AttendanceReportMonth";
import AttendanceReportDay from "components/dashboard/employees/attendance/AttendanceReportDay";
import { BooksCategory } from "components/dashboard/library/Library";
import { FindBooks } from "components/dashboard/library/Library";
import { IssueBooks } from "components/dashboard/library/Library";
import { ProductOperations } from "components/dashboard/products/Products";
import Album from "components/dashboard/website/Album";
import { Pages } from "components/dashboard/website/WebsiteSettings";
import SubPages from "components/dashboard/website/SubPages";
import Gallery from "components/dashboard/website/Gallery";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "fas fa-columns text-primary",
    layout: "/admin",
    component: <Index />,
  },
  {
    name: "Students",
    path: "/students",
    children: [
      {
        name: "Student CRUD",
        path: "/crud",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <StudentsCrud />,
      },
      {
        name: "Class Assignment",
        path: "/class_assignment",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <AssignClassStudent />,
      },
      {
        name: "Payment Fees",
        path: "/payment_fees",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <StudentPaymentFees />,
      },
      {
        name: "Student Documents",
        path: "/admit_card",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <StudentsDocuments />,
      },
      {
        name: "Attendance Report(Day)",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <StudentsAttendanceReportDay />,
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <StudentsAttendanceReportMonth />,
      },
      {
        name: "Phonebook",
        path: "/phonebook",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <StudentsPhonebook />,
      },
    ],
    icon: "fas fa-graduation-cap text-warning",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Employee",
    path: "/employees",
    children: [
      {
        name: "Employee CRUD",
        path: "/crud",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <EmployeeCrud />,
      },
      {
        name: "Employee Types",
        path: "/employee_type",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <EmployeeTypes />,
      },
      {
        name: "Employee Posts",
        path: "/employee_post",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <EmployeePosts />,
      },
      {
        name: "Employee Salary Structure",
        path: "/salary_structure",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <Index />,
      },
      {
        name: "Attendance Report(Day)",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <AttendanceReportDay />,
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <AttendanceReportMonth />,
      },
      {
        name: "Phonebook",
        path: "/phonebook",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <Index />,
      },
    ],
    icon: "fas fa-briefcase text-default",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Exam",
    path: "/exams",
    children: [
      {
        name: "Exam CRUD",
        path: "/exam",
        icon: "fas fa-link",
        layout: "/admin/exams",
        component: <ExamCrud />,
      },
      {
        name: "Marks CRUD",
        path: "/marks",
        icon: "fas fa-link",
        layout: "/admin/exams",
        component: <Marks />,
      },
      {
        name: "Tabulation Sheet",
        path: "/tabulation",
        icon: "fas fa-link",
        layout: "/admin/exams",
        component: <Tabulation />,
      },
    ],
    icon: "fas fa-notes-medical text-info",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Result",
    path: "/result",
    children: [
      {
        name: "Result CRUD",
        path: "/crud",
        icon: "fas fa-link",
        layout: "/admin/results",
        component: <ResultCrud />,
      },
      {
        name: "Result Card",
        path: "/card",
        icon: "fas fa-link",
        layout: "/admin/results",
        component: <Index />,
      },
      {
        name: "Marksheet",
        path: "/marksheet",
        icon: "fas fa-link",
        layout: "/admin/results",
        component: <Index />,
      },
      {
        name: "Result Publishing",
        path: "/publishing",
        icon: "fas fa-link",
        layout: "/admin/results",
        component: <ResultPublishing />,
      },
    ],
    icon: "fas fa-file-alt text-success",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Payment",
    path: "/admin/payment",
    children: [
      {
        name: "Student Payment",
        path: "/student_payment",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: <StudentPayment />,
      },
      {
        name: "Student Due Payment",
        path: "/due_payment",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: <DuePayment />,
      },
      {
        name: "Payment Receipt",
        path: "/receipt",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: <PaymentReceipt />,
      },
      {
        name: "Payment Report",
        path: "/report",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: <PaymentReport />,
      },
      {
        name: "Employee Salary Payment",
        path: "/employee_payment",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: <Index />,
      },
    ],
    icon: "fas fa-money-bill-alt text-danger",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Accounts",
    path: "/accounts",
    children: [
      {
        name: "Accounts CRUD",
        path: "/account",
        icon: "fas fa-link",
        layout: "/admin/accounts",
        component: <AccountsCrud />,
      },
      {
        name: "Accounts Report",
        path: "/report",
        icon: "fas fa-link",
        layout: "/admin/accounts",
        component: <AccountsReport />,
      },
      {
        name: "Accounts Balance",
        path: "/account_balance",
        icon: "fas fa-link",
        layout: "/admin/accounts",
        component: <AccountBalance />,
      },
    ],
    icon: "fas fa-file-invoice text-warning",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Library",
    path: "/library",
    children: [
      {
        name: "Books CRUD",
        path: "/books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: <BooksCrud />,
      },
      {
        name: "Books Category",
        path: "/books_category",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: <BooksCategory />,
      },
      {
        name: "Find Books",
        path: "/find_books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: <FindBooks />,
      },
      {
        name: "Issue Books",
        path: "/issue_books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: <IssueBooks />,
      },
    ],
    icon: "fas fa-book text-default",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Products",
    path: "/products",
    children: [
      {
        name: "Product CRUD",
        path: "/product",
        icon: "fas fa-link",
        layout: "/admin/products",
        component: <ProductCrud />,
      },
      {
        name: "Sell Product",
        path: "/sell_product",
        icon: "fas fa-link",
        layout: "/admin/products",
        component: <ProductOperations />,
      },
    ],
    icon: "fas fa-shopping-basket text-info",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Website Settings",
    path: "/website",
    children: [
      {
        name: "Pages CRUD",
        path: "/pages",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Pages />,
      },
      {
        name: "Sub Pages CRUD",
        path: "/sub_pages",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <SubPages />,
      },
      {
        name: "Gallery",
        path: "/gallery",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Gallery />,
      },
      {
        name: "Album",
        path: "/admin/webiste/album",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Album />,
      },
      {
        name: "Banner",
        path: "/banner",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Index />,
      },
      {
        name: "HomePage Design",
        path: "/homepage",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Index />,
      },
      {
        name: "Notifications",
        path: "/notifications",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Index />,
      },
    ],
    icon: "fas fa-server text-warning",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Settings",
    path: "/settings",
    children: [
      {
        name: "Religion CRUD",
        path: "/religion",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Religion />,
      },
      {
        name: "Session CRUD",
        path: "/session",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Session />,
      },
      {
        name: "Class CRUD",
        path: "/class",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <SchoolClass />,
      },
      {
        name: "Department CRUD",
        path: "/department",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Department />,
      },
      {
        name: "Subject CRUD",
        path: "/subject",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Subject />,
      },
      {
        name: "Assign Subject",
        path: "/assign_subject",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <AssignSubject />,
      },
      {
        name: "GPA CRUD",
        path: "/gpa",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <GPA />,
      },
      {
        name: "Grade CRUD",
        path: "/grade",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Grade />,
      },
      {
        name: "Users",
        path: "/users",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Users />,
      },
      {
        name: "User Roles",
        path: "/user_roles",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Roles />,
      },
      {
        name: "Role Permissions",
        path: "/role_permissions",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Permissions />,
      },
      {
        name: "Institute Info",
        path: "/institute_info",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Index />,
      },
      {
        name: "Payment Category",
        path: "/payment_category",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <PaymentCategory />,
      },
      {
        name: "Extended Fields Student",
        path: "/students_extended_info",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <StudentsExtendedInfo />,
      },
      {
        name: "Extended Fields Teacher",
        path: "/teachers_extended_info",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <EmployeesExtendedInfo />,
      },
    ],
    icon: "fas fa-cogs text-success",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
];
export default routes;
