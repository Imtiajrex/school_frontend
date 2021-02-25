import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import ManualAttendanceList from "./ManualAttendanceList";

export default function ManualAttendance() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");

  return (
    <div>
      <Index
        title="Student Manual Attendance"
        list_url="/students/mark_attendance"
        list_head={[
          {
            title: "Role",
            identifier: "role",
          },
          {
            title: "Student ID",
            identifier: "student_identifier",
          },
          {
            title: "Student Name",
            identifier: "student_name",
          },
          {
            title: "Attendance Status",
            identifier: "attendance_status",
          },
        ]}
        CustomListComponent={ManualAttendanceList}
        query_title="Query Student List"
        query_list={[
          {
            placeholder: "Date",
            type: "date",
            name: "date",
            required: true,
          },
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
            required: true,
          },
        ]}
        query_data={{
          date: "",
          class_id: -1,
          session_id: -1,
          department_id: -1,
        }}
      />
    </div>
  );
}
