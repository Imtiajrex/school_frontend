import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";

export default function StudentsPhonebook() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");

  return (
    <div>
      <Index
        title="Student Phonebook"
        list_url="/students/student_assignment"
        list_head={[
          {
            title: "Class",
            identifier: "class",
          },
          {
            title: "Department",
            identifier: "department",
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
            title: "Primary Phone",
            identifier: "primary_phone",
          },
          {
            title: "Secondary Phone",
            identifier: "secondary_phone",
          },
        ]}
        add_initial_values={{
          student_id: "",
          class_id: -1,
          session_id: -1,
          department_id: -1,
          role: "",
        }}
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
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_id",
            required: false,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
          student_id: "",
        }}
      />
    </div>
  );
}
