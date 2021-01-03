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
} from "components/dashboard/settings/Settings";

import { BooksCrud } from "components/dashboard/library/Library";
import { ProductCrud } from "components/dashboard/products/Products";
import { AccountsCrud } from "components/dashboard/accounts/Accounts";

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
        component: <Index />,
      },
      {
        name: "Payment Fees",
        path: "/payment_fees",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: <Index />,
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
        component: <Index />,
      },
      {
        name: "Employee Type",
        path: "/employee_type",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: <Index />,
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
    path: "/exam",
    children: [
      {
        name: "Exam CRUD",
        path: "/crud",
        icon: "fas fa-link",
        layout: "/admin/exams",
        component: <Index />,
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
        component: <Index />,
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
        name: "Student Payment CRUD",
        path: "/student_payment",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: <Index />,
      },
      {
        name: "Employee Salary Payment CRUD",
        path: "/employee_payment",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: <Index />,
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
        name: "Accounts Report",
        path: "/report",
        icon: "fas fa-link",
        layout: "/admin/accounts",
        component: <Index />,
      },
      {
        name: "Accounts CRUD",
        path: "/account",
        icon: "fas fa-link",
        layout: "/admin/accounts",
        component: <AccountsCrud />,
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
        name: "Assign Department",
        path: "/assign_department",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: <Index />,
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
        component: <Index />,
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
    ],
    icon: "fas fa-cogs text-success",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
];
export default routes;
