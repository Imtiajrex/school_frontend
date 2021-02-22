import Index from "components/crud/Index";
import React from "react";

export default function Grade({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="GPA"
        list_url="/settings/grade"
        list_head={[
          { title: "Grade", identifier: "grade" },
          { title: "Starting GPA", identifier: "starting_gpa" },
          { title: "Ending GPA", identifier: "ending_gpa" },
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
        add_data={[
          {
            placeholder: "Starting GPA",
            type: "number",
            name: "starting_gpa",
            required: true,
          },
          {
            placeholder: "Ending GPA",
            type: "number",
            name: "ending_gpa",
            required: true,
          },
          {
            placeholder: "Grade",
            type: "text",
            name: "grade",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Starting GPA",
            type: "number",
            name: "starting_gpa",
            required: true,
          },
          {
            placeholder: "Ending GPA",
            type: "number",
            name: "ending_gpa",
            required: true,
          },
          {
            placeholder: "Grade",
            type: "text",
            name: "grade",
            required: true,
          },
        ]}
        add_initial_values={{ starting_gpa: "", ending_gpa: "", grade: "" }}
      />
    </div>
  );
}
