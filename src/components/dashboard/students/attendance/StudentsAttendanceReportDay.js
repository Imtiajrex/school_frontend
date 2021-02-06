import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import AttendanceListDay from "./AttendanceListDay";
export default function StudentsAttendanceReportDay() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");
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
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            setState: setSelectedSession,
            required: false,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setSelectedClass,
            required: false,
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
            placeholder: "Date",
            type: "date",
            name: "date",
            required: true,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
          student_id: "",
          date: "",
        }}
      />
    </div>
  );
}
