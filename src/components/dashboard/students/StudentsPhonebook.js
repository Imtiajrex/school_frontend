import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";

export default function StudentsPhonebook({ permission }) {
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
        title="Student Phonebook"
        list_url="/students/student_assignment"
        def_url_param="phonebook=true"
        indexed={false}
        list_head={[
          {
            title: "Roll",
            identifier: "role",
          },
          {
            title: "ID",
            identifier: "student_identifier",
          },
          {
            title: "Name",
            identifier: "student_name",
          },
          {
            title: "Mother",
            identifier: "mother_name",
          },
          {
            title: "Father",
            identifier: "father_name",
          },
          {
            title: "Primary Phone",
            identifier: "primary_phone",
          },
          {
            title: "Secondary Phone",
            identifier: "secondary_phone",
          },
          {
            title: "Primary Phone",
            identifier: "primary_phone",
          },
        ]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
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
        print_url="students/phonebook"
      />
    </div>
  );
}
