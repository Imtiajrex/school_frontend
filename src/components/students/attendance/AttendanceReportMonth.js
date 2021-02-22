import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext } from "react";
import AttendanceListMonth from "./AttendanceListMonth";
export default function AttendanceReportMonth() {
  const student_id = localStorage.getItem("user_id");
  const { session_list } = useContext(ClassDeptSessionContext);
  return (
    <div className="employee_attendance">
      <Index
        title="Students Attendance Month"
        list_url="/students/student_monthly_attendance"
        CustomListComponent={AttendanceListMonth}
        query_title="Query Student Attendance"
        query_list={[
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_id",
            required: true,
            disabled: true,
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
          student_id,
          year: -1,
          month: -1,
        }}
      />
    </div>
  );
}
