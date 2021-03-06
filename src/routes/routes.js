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
  StudentsIDCard,
  StudentsAdmitCard,
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
import EmployeesPhonebook from "components/dashboard/employees/EmployeesPhonebook";
import Notifications from "components/dashboard/website/Notifications";
import Articles from "components/dashboard/website/Articles";
import Slideshow from "components/dashboard/website/Slideshow";

import SendSMS from "components/dashboard/message/SendSMS";
import StudentAppMessage from "components/dashboard/message/StudentAppMessage";
import EmployeeAppMessage from "components/dashboard/message/EmployeeAppMessage";

import ManualAttendance from "components/dashboard/students/manual_attendance/ManualAttendance";
import EmployoeeManualAttendance from "components/dashboard/employees/manual_attendance/EmployeeManualAttendance";
import Testimonial from "components/dashboard/website/Testimonial";
import SchoolSpecialty from "components/dashboard/website/SchoolSpecialty";
import AboutSchool from "components/dashboard/website/AboutSchool";
import Figures from "components/dashboard/website/Figures";
import Dashboard from "components/dashboard/Dashboard";

import StudentAttendanceTime from "components/dashboard/settings/StudentAttendanceTime";
import EmployeeAttendanceTime from "components/dashboard/settings/EmployeeAttendanceTime";
import WeekDays from "components/dashboard/settings/WeekDays";

import StudentAssignID from "components/dashboard/attendance/student_assign/StudentAssignID";
import EmployeeAssignID from "components/dashboard/attendance/employee_assign/EmployeeAssignID";
const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "fas fa-columns text-primary",
    layout: "/admin",
    component: Dashboard,
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
        component: StudentsCrud,
        permission: {
          delete: "Delete Students",
          create: "Create Students",
          view: "View Students",
          update: "Update Students",
        },
      },
      {
        name: "Class Assignment",
        path: "/class_assignment",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: AssignClassStudent,
        permission: {
          delete: "Delete ClassHasStudents",
          create: "Create ClassHasStudents",
          view: "View ClassHasStudents",
          update: "Update ClassHasStudents",
        },
      },
      {
        name: "Payment Fees",
        path: "/payment_fees",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: StudentPaymentFees,
        permission: {
          delete: "Delete Student Payment Info",
          create: "Create Student Payment Info",
          view: "View Student Payment Info",
          update: "Update Student Payment Info",
        },
      },
      {
        name: "Attendance Report(Day)",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: StudentsAttendanceReportDay,
        permission: {
          view: "View Student Attendance",
        },
      },
      {
        name: "Manual Attendance",
        path: "/manual_attendance",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: ManualAttendance,
        permission: {
          view: "View Student Attendance",
          assign: "Assign Student Attendance",
        },
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: StudentsAttendanceReportMonth,
        permission: {
          view: "View Student Attendance",
        },
      },
      {
        name: "Phonebook",
        path: "/phonebook",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: StudentsPhonebook,
        permission: {
          view: "View Students",
        },
      },
      {
        name: "ID Cards",
        path: "/id_card",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: StudentsIDCard,
        permission: {
          view: "View Students",
        },
      },
      {
        name: "Admit Cards",
        path: "/admit_card",
        icon: "fas fa-link",
        layout: "/admin/students",
        component: StudentsAdmitCard,
        permission: {
          view: "View Students",
        },
      },
    ],
    icon: "fas fa-graduation-cap text-warning",
    layout: "/admin",
    permission: [
      "Delete Students",
      "Create Students",
      "View Students",
      "Update Students",
      "View Student Attendance",
      "Assign Student Attendance",
      "Update Student Payment Info",
      "View Student Payment Info",
      "Create Student Payment Info",
      "Delete Student Payment Info",
      "Delete ClassHasStudents",
      "Create ClassHasStudents",
      "View ClassHasStudents",
      "Update ClassHasStudents",
    ],
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
        component: EmployeeCrud,
        permission: {
          delete: "Delete Employees",
          create: "Create Employees",
          view: "View Employees",
          update: "Update Employees",
        },
      },
      {
        name: "Employee Types",
        path: "/employee_type",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: EmployeeTypes,
        permission: {
          delete: "Delete Employee Type",
          create: "Create Employee Type",
          view: "View Employee Type",
          update: "Update Employee Type",
        },
      },
      {
        name: "Employee Posts",
        path: "/employee_post",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: EmployeePosts,
        permission: {
          delete: "Delete Employee Post",
          create: "Create Employee Post",
          view: "View Employee Post",
          update: "Update Employee Post",
        },
      },
      {
        name: "Manual Attendance",
        path: "/manual_attendance",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: EmployoeeManualAttendance,
        permission: {
          view: "View Employee Attendance",
          assign: "Assign Employee Attendance",
        },
      },
      {
        name: "Attendance Report(Day)",
        path: "/attendance",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: AttendanceReportDay,
        permission: {
          view: "View Employee Attendance",
        },
      },
      {
        name: "Attendance Report(Month)",
        path: "/attendance_month",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: AttendanceReportMonth,
        permission: {
          view: "View Employee Attendance",
        },
      },
      {
        name: "Phonebook",
        path: "/phonebook",
        icon: "fas fa-link",
        layout: "/admin/employees",
        component: EmployeesPhonebook,
        permission: {
          view: "View Employees",
        },
      },
    ],
    permission: [
      "Delete Employees",
      "Create Employees",
      "View Employees",
      "Update Employees",
      "Delete Employee Post",
      "Create Employee Post",
      "View Employee Post",
      "Update Employee Type",
      "Delete Employee Type",
      "Create Employee Type",
      "View Employee Type",
      "Update Employee Type",
      "View Employee Attendance",
      "Assign Employee Attendance",
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
        component: ExamCrud,
        permission: {
          delete: "Delete Exam",
          create: "Create Exam",
          view: "View Exam",
          update: "Update Exam",
        },
      },
      {
        name: "Marks CRUD",
        path: "/marks",
        icon: "fas fa-link",
        layout: "/admin/exams",
        component: Marks,
        permission: {
          delete: "Delete Marks",
          create: "Add Marks",
          view: "View Marks",
        },
      },
      {
        name: "Tabulation Sheet",
        path: "/tabulation",
        icon: "fas fa-link",
        layout: "/admin/exams",
        component: Tabulation,
        permission: {
          mark: "View Marks",
          exam: "View Exams",
        },
      },
    ],
    permission: [
      "Delete Exam",
      "Create Exam",
      "View Exam",
      "Update Exam",
      "Delete Marks",
      "Create Marks",
      "View Marks",
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
        component: ResultCrud,
        permission: {
          delete: "Delete Result",
          create: "Create Result",
          view: "View Result",
          update: "Update Result",
        },
      },
      {
        name: "Result Publishing",
        path: "/publishing",
        icon: "fas fa-link",
        layout: "/admin/results",
        component: ResultPublishing,
        permission: {
          delete: "Delete Result Publication Status",
          create: "Create Result Publication Status",
          view: "View Result Publication Status",
          update: "Update Result Publication Status",
        },
      },
    ],
    permission: [
      "Delete Result",
      "Create Result",
      "View Result",
      "Update Result",
      "Delete Result Publication Status",
      "Create Result Publication Status",
      "View Result Publication Status",
      "Update Result Publication Status",
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
        component: StudentPayment,
        permission: {
          delete: "Delete Payment",
          create: "Create Payment",
          view: "View Payment",
          update: "Update Payment",
        },
      },
      {
        name: "Student Due Payment",
        path: "/due_payment",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: DuePayment,
        permission: {
          view: "View Due List",
          pay: "Pay Due Record",
          update: "Update Due Record",
          delete: "Delete Due Record",
        },
      },
      {
        name: "Payment Receipt",
        path: "/receipt",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: PaymentReceipt,
        permission: {
          view: "View Payment Receipt",
        },
      },
      {
        name: "Payment Report",
        path: "/report",
        icon: "fas fa-link",
        layout: "/admin/payment",
        component: PaymentReport,
        permission: {
          delete: "Delete Payment",
          create: "Create Payment",
          view: "View Payment",
          update: "Update Payment",
        },
      },
    ],
    permission: [
      "Delete Payment",
      "Create Payment",
      "View Payment",
      "Update Payment",
      "View Payment Receipt",
      "Delete Due Record",
      "View Due List",
      "Pay Due Record",
      "Update Due Record",
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
        component: AccountsCrud,
        permission: {
          delete: "Delete Accounts",
          create: "Create Accounts",
          view: "View Accounts",
          update: "Update Accounts",
        },
      },
      {
        name: "Accounts Report",
        path: "/report",
        icon: "fas fa-link",
        layout: "/admin/accounts",
        component: AccountsReport,
        permission: {
          view: "View Accounts",
        },
      },
      {
        name: "Accounts Balance",
        path: "/account_balance",
        icon: "fas fa-link",
        layout: "/admin/accounts",
        component: AccountBalance,
        permission: {
          view: "View Account Balance",
          update: "Edit Account Balance",
        },
      },
    ],
    permission: [
      "Delete Accounts",
      "Create Accounts",
      "View Accounts",
      "Update Accounts",
      "View Account Balance",
      "Edit Account Balance",
    ],
    icon: "fas fa-file-invoice text-warning",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
  {
    name: "Message",
    path: "/messages",
    children: [
      {
        name: "Send SMS",
        path: "/send_sms",
        icon: "fas fa-link",
        layout: "/admin/messages",
        component: SendSMS,
        permission: {
          send: "Send SMS",
        },
      },
      {
        name: "Student App Message",
        path: "/student_message",
        icon: "fas fa-link",
        layout: "/admin/messages",
        component: StudentAppMessage,
        permission: {
          delete: "Delete Student Message",
          create: "Create Student Message",
          view: "View Student Message",
          update: "Update Student Message",
        },
      },
      {
        name: "Employee App Message",
        path: "/employee_message",
        icon: "fas fa-link",
        layout: "/admin/messages",
        component: EmployeeAppMessage,
        permission: {
          delete: "Delete Employee Message",
          create: "Create Employee Message",
          view: "View Employee Message",
          update: "Update Employee Message",
        },
      },
    ],
    permission: [
      "Send SMS",
      "Delete Student Message",
      "Create Student Message",
      "View Student Message",
      "Update Student Message",
      "Delete Employee Message",
      "Create Employee Message",
      "View Employee Message",
      "Update Employee Message",
    ],
    icon: "fas fa-envelope text-success",
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
        component: BooksCrud,
        permission: {
          delete: "Delete Books",
          create: "Create Books",
          view: "View Books",
          update: "Update Books",
        },
      },
      {
        name: "Books Category",
        path: "/books_category",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: BooksCategory,
        permission: {
          delete: "Delete Book Category",
          create: "Create Book Category",
          view: "View Book Category",
          update: "Update Book Category",
        },
      },
      {
        name: "Find Books",
        path: "/find_books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: FindBooks,
        permission: {
          view: "View Books",
        },
      },
      {
        name: "Issue Books",
        path: "/issue_books",
        icon: "fas fa-link",
        layout: "/admin/library",
        component: IssueBooks,
        permission: {
          delete: "Delete BooksSold",
          create: "Create BooksSold",
          view: "View BooksSold",
          update: "Update BooksSold",
        },
      },
    ],
    permission: [
      "Delete Books",
      "Create Books",
      "View Books",
      "Update Books",
      "Delete Books Category",
      "Create Books Category",
      "View Books Category",
      "Update Books Category",
      "Delete BooksSold",
      "Create BooksSold",
      "View BooksSold",
      "Update BooksSold",
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
        component: ProductCrud,
        permission: {
          delete: "Delete Products",
          create: "Create Products",
          view: "View Products",
          update: "Update Products",
        },
      },
      {
        name: "Sell Product",
        path: "/sell_product",
        icon: "fas fa-link",
        layout: "/admin/products",
        component: ProductOperations,
        permission: {
          delete: "Delete ProductsSold",
          create: "Create ProductsSold",
          view: "View ProductsSold",
          update: "Update ProductsSold",
        },
      },
    ],
    permission: [
      "Delete Products",
      "Create Products",
      "View Products",
      "Update Products",
      "Delete ProductsSold",
      "Create ProductsSold",
      "View ProductsSold",
      "Update ProductsSold",
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
        component: Pages,
        permission: {
          delete: "Delete Pages",
          create: "Create Pages",
          view: "View Pages",
          update: "Update Pages",
        },
      },
      {
        name: "Sub Pages CRUD",
        path: "/sub_pages",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: SubPages,
        permission: {
          delete: "Delete Pages",
          create: "Create Pages",
          view: "View Pages",
          update: "Update Pages",
        },
      },
      {
        name: "Gallery",
        path: "/gallery",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: Gallery,
        permission: {
          upload: "Upload Image",
          delete: "Delete Image",
          update: "Update Image",
        },
      },
      {
        name: "Album",
        path: "/album",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: Album,
        permission: {
          delete: "Delete Album",
          create: "Create Album",
          view: "View Album",
          update: "Update Album",
        },
      },
      {
        name: "Slideshow",
        path: "/slideshow",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: Slideshow,
        permission: {
          upload: "Upload Image",
          delete: "Delete Image",
          update: "Update Image",
        },
      },
      {
        name: "Articles",
        path: "/articles",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: Articles,
        permission: {
          delete: "Delete Homepage",
          create: "Create Homepage",
          view: "View Homepage",
          update: "Update Homepage",
        },
      },
      {
        name: "Notifications",
        path: "/notifications",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: Notifications,
        permission: {
          delete: "Delete Notifications",
          create: "Create Notifications",
          view: "View Notifications",
          update: "Update Notifications",
        },
      },
      {
        name: "Testimonial",
        path: "/testimonial",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: Testimonial,
        permission: {
          delete: "Delete Homepage",
          create: "Create Homepage",
          view: "View Homepage",
          update: "Update Homepage",
        },
      },
      {
        name: "School Specialty",
        path: "/school_specialty",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: SchoolSpecialty,
        permission: {
          delete: "Delete Homepage",
          create: "Create Homepage",
          view: "View Homepage",
          update: "Update Homepage",
        },
      },
      {
        name: "About School",
        path: "/about_school",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: AboutSchool,
        permission: {
          delete: "Delete Homepage",
          create: "Create Homepage",
          view: "View Homepage",
          update: "Update Homepage",
        },
      },
      {
        name: "Figures",
        path: "/figure",
        icon: "fas fa-link",
        layout: "/admin/website",
        component: Figures,
        permission: {
          delete: "Delete Homepage",
          create: "Create Homepage",
          view: "View Homepage",
          update: "Update Homepage",
        },
      },
    ],
    permission: [
      "Delete Pages",
      "Create Pages",
      "View Pages",
      "Update Pages",
      "Delete Album",
      "Create Album",
      "View Album",
      "Update Album",
      "Delete Image",
      "Create Image",
      "View Image",
      "Update Image",
      "Delete Homepage",
      "Create Homepage",
      "View Homepage",
      "Update Homepage",
    ],
    icon: "fas fa-server text-warning",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },

  {
    name: "Attendance",
    path: "/attendance",
    children: [
      {
        name: "Assign Student Card",
        path: "/assign_student_card",
        icon: "fas fa-link",
        layout: "/admin/attendance",
        component: StudentAssignID,
        permission: {
          view: "Assign ID",
        },
      },
      {
        name: "Assign Teacher Card",
        path: "/assign_teacher_card",
        layout: "/admin/attendance",
        icon: "fas fa-link",
        component: EmployeeAssignID,
        permission: {
          view: "Assign ID",
        },
      },
    ],
    icon: "fas fa-fingerprint text-default",
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
        component: Religion,
        permission: {
          delete: "Delete Religion",
          create: "Create Religion",
          view: "View Religion",
          update: "Update Religion",
        },
      },
      {
        name: "Session CRUD",
        path: "/session",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: Session,
        permission: {
          delete: "Delete Session",
          create: "Create Session",
          view: "View Session",
          update: "Update Session",
        },
      },
      {
        name: "Class CRUD",
        path: "/class",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: SchoolClass,
        permission: {
          delete: "Delete Class",
          create: "Create Class",
          view: "View Class",
          update: "Update Class",
        },
      },
      {
        name: "Department CRUD",
        path: "/department",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: Department,
        permission: {
          delete: "Delete Department",
          create: "Create Department",
          view: "View Department",
          update: "Update Department",
        },
      },
      {
        name: "Subject CRUD",
        path: "/subject",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: Subject,
        permission: {
          delete: "Delete Subject",
          create: "Create Subject",
          view: "View Subject",
          update: "Update Subject",
        },
      },
      {
        name: "Assign Subject",
        path: "/assign_subject",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: AssignSubject,
        permission: {
          delete: "Delete Assigned Subject",
          assign: "Assign Subject ",
          view: "View Assigned Subject",
        },
      },
      {
        name: "GPA CRUD",
        path: "/gpa",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: GPA,
        permission: {
          delete: "Delete GPA",
          create: "Create GPA",
          view: "View GPA",
          update: "Update GPA",
        },
      },
      {
        name: "Grade CRUD",
        path: "/grade",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: Grade,
        permission: {
          delete: "Delete Grade",
          create: "Create Grade",
          view: "View Grade",
          update: "Update Grade",
        },
      },
      {
        name: "Users",
        path: "/users",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: Users,
        permission: {
          delete: "Delete User",
          create: "Create User",
          view: "View User",
          update: "Update User",
        },
      },
      {
        name: "User Roles",
        path: "/user_roles",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: Roles,
        permission: {
          delete: "Delete Role",
          create: "Create Role",
          view: "View Role",
          update: "Update Role",
        },
      },
      {
        name: "Role Permissions",
        path: "/role_permissions",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: Permissions,
        permission: { view: "View Permissions" },
      },
      {
        name: "Institute Info",
        path: "/institute_info",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: InstituteInfo,
        permission: {
          update: "Update InstituteInfo",
        },
      },
      {
        name: "Weekday",
        path: "/weekday",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: WeekDays,
        permission: {
          delete: "Delete Weekday",
          create: "Create Weekday",
          view: "View Weekday",
          update: "Update Weekday",
        },
      },
      {
        name: "Payment Category",
        path: "/payment_category",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: PaymentCategory,
        permission: {
          delete: "Delete PaymentCategory",
          create: "Create PaymentCategory",
          view: "View PaymentCategory",
          update: "Update PaymentCategory",
        },
      },
      {
        name: "Student Attendance Time",
        path: "/students_attendance_time",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: StudentAttendanceTime,
        permission: {
          view: "View Attendance Time",
          update: "Update Attendance Time",
        },
      },
      {
        name: "Employee Attendance Time",
        path: "/employee_attendance_time",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: EmployeeAttendanceTime,
        permission: {
          view: "View Attendance Time",
          update: "Update Attendance Time",
        },
      },
      {
        name: "Extended Fields Student",
        path: "/students_extended_info",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: StudentsExtendedInfo,
        permission: {
          delete: "Delete Students Extended Info",
          create: "Create Students Extended Info",
          view: "View Students Extended Info",
          update: "Update Students Extended Info",
        },
      },
      {
        name: "Extended Fields Teacher",
        path: "/teachers_extended_info",
        icon: "fas fa-link",
        layout: "/admin/settings",
        component: EmployeesExtendedInfo,
        permission: {
          delete: "Delete Teachers Extended Info",
          create: "Create Teachers Extended Info",
          view: "View Teachers Extended Info",
          update: "Update Teachers Extended Info",
        },
      },
    ],
    permission: [
      "Delete Religion",
      "Create Religion",
      "View Religion",
      "Update Religion",
      "Delete Session",
      "Create Session",
      "View Session",
      "Update Session",
      "Delete Class",
      "Create Class",
      "View Class",
      "Update Class",
      "Delete Department",
      "Create Department",
      "View Department",
      "Update Department",
      "Delete Subject",
      "Create Subject",
      "View Subject",
      "Update Subject",
      "Delete Assigned Subject",
      "Assign Subject",
      "View Assigned Subject",
      "Delete GPA",
      "Create GPA",
      "View GPA",
      "Update GPA",
      "Delete Grade",
      "Create Grade",
      "View Grade",
      "Update Grade",
      "Delete User",
      "Create User",
      "View User",
      "Update User",
      "Delete Role",
      "Create Role",
      "View Role",
      "Update Role",
      "Delete PaymentCategory",
      "Create PaymentCategory",
      "View PaymentCategory",
      "Update PaymentCategory",
      "Delete Teachers Extended Info",
      "Create Teachers Extended Info",
      "View Teachers Extended Info",
      "Update Teachers Extended Info",
      "Delete Students Extended Info",
      "Create Students Extended Info",
      "View Students Extended Info",
      "Update Students Extended Info",
      "View Permissions",
      "Update InstituteInfo",
    ],
    icon: "fas fa-cogs text-success",
    layout: "/admin",
    component: <Redirect to="/admin/dashboard" />,
  },
];
export default routes;
