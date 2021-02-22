import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import AttendanceListMonth from "./AttendanceListMonth";
export default function AttendanceReportMonth({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");
  return (
    <div className="employee_attendance">
      <Index
        title="Students Attendance Month"
        list_url="/students/student_monthly_attendance"
        CustomListComponent={AttendanceListMonth}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        query_title="Query Student Attendance"
        query_list={[
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            setState: setSelectedSession,
            required: true,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setSelectedClass,
            required: true,
          },
          {
            placeholder: "Department",
            type: "select",
            name: "department_id",
            options: department_list.filter(
              (element) =>
                element.class_id == selected_class &&
                element.session_id == selected_session
            ),
            required: false,
          },
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_id",
            required: false,
          },
          {
            placeholder: "Year",
            type: "select",
            name: "year",
            options: session_list,
            required: true,
          },
          {
            placeholder: "Month",
            type: "select",
            name: "month",
            options: [
              { text: "January", value: "01" },
              { text: "February", value: "02" },
              { text: "March", value: "03" },
              { text: "April", value: "04" },
              { text: "May", value: "05" },
              { text: "June", value: "06" },
              { text: "July", value: "07" },
              { text: "August", value: "08" },
              { text: "September", value: "09" },
              { text: "October", value: "10" },
              { text: "November", value: "11" },
              { text: "December", value: "12" },
            ],
            required: true,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
          student_id: "",
          year: -1,
          month: -1,
        }}
        print_url="students/monthly_attendance"
      />
    </div>
  );
}
