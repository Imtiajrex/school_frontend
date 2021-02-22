import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";

export default function AssignClassStudent({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");

  const add_data = [
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
    {
      placeholder: "Student ID",
      type: "text",
      name: "student_id",
      required: true,
    },
    {
      placeholder: "Student Role",
      type: "number",
      name: "role",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Student List"
        list_url="/students/student_assignment"
        list_head={[
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
            identifier: "student_id",
          },
          {
            title: "Student Name",
            identifier: "student_name",
          },
          {
            title: "Student Role",
            identifier: "role",
          },
        ]}
        add={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        remove={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.delete) != -1
        }
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        add_data={add_data}
        edit_data={[
          {
            placeholder: "Student Role",
            type: "number",
            name: "role",
            required: true,
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
        print_url="students/list"
      />
    </div>
  );
}
