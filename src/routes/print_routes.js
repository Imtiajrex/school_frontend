import StudentList from "components/print/students/StudentList";
import Phonebook from "components/print/students/Phonebook";
import EmployeePhonebook from "components/print/employee/EmployeePhonebook";
import EmployeeList from "components/print/employee/EmployeeList";
import PaymentList from "components/print/payments/PaymentList";
import DueList from "components/print/payments/DueList";
import Accounts from "components/print/accounts/Accounts";
import StudentsAttendance from "components/print/students/StudentsAttendance";
import StudentsAttendanceMonth from "components/print/students/attendance_month/StudentsAttendanceMonth";
import EmployeeAttendance from "components/print/employee/EmployeeAttendance";
import EmployeesAttendanceMonth from "components/print/employee/attendance_month/EmployeesAttendanceMonth";
import Receipt from "components/print/payments/Receipt";
import Tabulation from "components/print/exam/Tabulation/Tabulation";
import ResultCard from "components/print/result/ResultCard";
import Admit from "components/print/docs/admit/Admit";
import ID from "components/print/docs/idcard/ID";

var print_routes = [
  {
    path: "/students",
    layout: "/print",
    children: [
      {
        path: "/list",
        name: "Students List",
        component: StudentList,
        layout: "/print/students",
      },
      {
        path: "/phonebook",
        name: "Students Phonebook",
        component: Phonebook,
        layout: "/print/students",
      },
      {
        path: "/attendance",
        name: "Students Attendance",
        component: StudentsAttendance,
        layout: "/print/students",
      },
      {
        path: "/monthly_attendance",
        name: "Students Attendance",
        component: StudentsAttendanceMonth,
        layout: "/print/students",
      },
    ],
  },
  {
    path: "/employees",
    layout: "/print",
    children: [
      {
        path: "/list",
        component: EmployeeList,
        layout: "/print/employees",
      },
      {
        path: "/phonebook",
        component: EmployeePhonebook,
        layout: "/print/employees",
      },
      {
        path: "/attendance",
        name: "Employee Attendance",
        component: EmployeeAttendance,
        layout: "/print/employees",
      },
      {
        path: "/monthly_attendance",
        name: "employee Attendance",
        component: EmployeesAttendanceMonth,
        layout: "/print/employees",
      },
    ],
  },
  {
    path: "/list",
    component: PaymentList,
    layout: "/print/payments",
  },
  {
    path: "/due_list",
    component: DueList,
    layout: "/print/payments",
  },
  {
    path: "/receipt",
    component: Receipt,
    layout: "/print/payments",
  },
  {
    path: "/tabulation",
    component: Tabulation,
    layout: "/print/exams",
  },
  {
    path: "/result_card",
    component: ResultCard,
    layout: "/print/results",
  },
  {
    path: "/admit",
    component: Admit,
    layout: "/print",
  },
  {
    path: "/id",
    component: ID,
    layout: "/print",
  },
  {
    path: "/report",
    component: Accounts,
    layout: "/print/accounts",
  },
];
export default print_routes;
