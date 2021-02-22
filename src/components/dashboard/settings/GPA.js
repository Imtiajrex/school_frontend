import Index from "components/crud/Index";
import React from "react";

export default function GPA({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="GPA"
        list_url="/settings/gpa"
        list_head={[
          { title: "GPA", identifier: "gpa" },
          { title: "Start From", identifier: "starting_number" },
          { title: "End In", identifier: "ending_number" },
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
            placeholder: "Start From",
            type: "number",
            name: "starting_number",
            required: true,
          },
          {
            placeholder: "End In",
            type: "number",
            name: "ending_number",
            required: true,
          },
          {
            placeholder: "GPA",
            type: "number",
            name: "gpa",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Start From",
            type: "number",
            name: "starting_number",
            required: true,
          },
          {
            placeholder: "End In",
            type: "number",
            name: "ending_number",
            required: true,
          },
          {
            placeholder: "GPA",
            type: "number",
            name: "gpa",
            required: true,
          },
        ]}
        add_initial_values={{ starting_number: "", ending_number: "", gpa: "" }}
      />
    </div>
  );
}
