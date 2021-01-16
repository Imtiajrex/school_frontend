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

import { ExamCrud } from "components/dashboard/exams/Exams";

import { ResultCrud } from "components/dashboard/results/Results";

import {
  StudentsCrud,
  AssignClassStudent,
  StudentPaymentFees,
} from "components/dashboard/students/Students";

import {
  EmployeeCrud,
  EmployeeTypes,
  EmployeePosts,
} from "components/dashboard/employees/Employees";

import { StudentPayment } from "components/dashboard/payments/Payment";
import {} from "components/dashboard/students/Students";
import { DuePayment } from "components/dashboard/payments/Payment";
import { PaymentReport } from "components/dashboard/payments/Payment";

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
        name: "Admit Card",
        path: "/admit_card",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <Index />,
      },
      {
        name: "Attendance Report",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <Index />,
      },
      {
        name: "Phonebook",
        path: "/phonebook",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <Index />,
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
        name: "Attendance Report",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <Index />,
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
        component: <Index />,
      },
      {
        name: "Tabulation Sheet",
        path: "/tabulation",
        icon: "fas fa-link",
        layout: "/admin/exams",
        component: <Index />,
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
        component: <Index />,
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
        component: <Index />,
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
        name: "Find Books",
        path: "/find_books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: <Index />,
      },
      {
        name: "Issue Books",
        path: "/issue_books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: <Index />,
      },
      {
        name: "Sell Books",
        path: "/sell_books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: <Index />,
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
        component: <Index />,
      },
      {
        name: "Issue Product",
        path: "/issue_product",
        icon: "fas fa-link",
        layout: "/admin/products",
        component: <Index />,
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
        name: "Website Template",
        path: "/template",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Index />,
      },
      {
        name: "Pages CRUD",
        path: "/pages",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Index />,
      },
      {
        name: "Gallery",
        path: "/gallery",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Index />,
      },
      {
        name: "Album",
        path: "/admin/webiste/album",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: <Index />,
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
