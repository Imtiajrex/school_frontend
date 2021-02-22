import Index from "components/crud/Index";
import React from "react";
import AttendanceListDay from "./AttendanceListDay";
export default function StudentsAttendanceReportDay() {
  const student_id = localStorage.getItem("user_id");
  return (
    <div>
      <Index
        title="Student Phonebook"
        list_url="/students/student_attendance"
        list_head={[
          {
            title: "Student ID",
            identifier: "student_identifier",
          },
          {
            title: "Student Role",
            identifier: "role",
          },
          {
            title: "Student Name",
            identifier: "student_name",
          },
          {
            title: "Date",
            identifier: "date",
          },
          {
            title: "Attendance",
            identifier: "attendance_status",
          },
          {
            title: "Access Time",
            identifier: "access_time",
          },
        ]}
        CustomListComponent={AttendanceListDay}
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
            placeholder: "Date",
            type: "date",
            name: "date",
            required: true,
          },
        ]}
        query_data={{
          student_id,
          date: "",
        }}
      />
    </div>
  );
}
