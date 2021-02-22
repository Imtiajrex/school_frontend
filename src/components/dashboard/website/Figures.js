import Index from "components/crud/Index";
import React from "react";

export default function Figures({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const send_data = [
    {
      placeholder: "Students Enrolled",
      type: "number",
      name: "students",
      required: true,
    },
    {
      placeholder: "Certified Teachers",
      type: "number",
      name: "teachers",
      required: true,
    },
    {
      placeholder: "Result Percentage",
      type: "number",
      name: "result",
      required: true,
    },
    {
      placeholder: "Parent Satisfaction",
      type: "number",
      name: "parent_satisfaction",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Figures"
        list_url="/website_settings/figure"
        list_head={[
          {
            title: "Students Enrolled",
            identifier: "students",
          },
          {
            title: "Certified Teachers",
            identifier: "teachers",
          },
          {
            title: "Result Percentage",
            identifier: "teachers",
          },
          {
            title: "Parent Satisfaction",
            identifier: "parent_satisfaction",
          },
        ]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        edit_data={send_data}
      />
    </div>
  );
}
