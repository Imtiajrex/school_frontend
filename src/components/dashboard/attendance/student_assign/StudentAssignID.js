import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import StudentAssignList from "./StudentAssignList";
export default function StudentAssignID({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");

  return (
    <div>
      <Index
        title="Student List"
        list_url="/students/student_assignment"
        list_head={[
          {
            title: "Roll",
            identifier: "role",
          },
          {
            title: "Session",
            identifier: "session",
          },
          {
            title: "Class",
            identifier: "class",
          },
          {
            title: "Department",
            identifier: "department",
          },
          {
            title: "Student ID",
            identifier: "student_identifier",
          },
          {
            title: "Student Name",
            identifier: "student_name",
          },
        ]}
        indexed={false}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        CustomListComponent={StudentAssignList}
        query_title="Query Student List"
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
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
        }}
      />
    </div>
  );
}
