import Index from "components/crud/Index";
import React from "react";

export default function EmployeeTypes({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Employee Type List"
        list_url="/employees/employee_type"
        list_head={[{ title: "Employee Type", identifier: "employee_type" }]}
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
            placeholder: "Employee Type",
            type: "text",
            name: "employee_type",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Employee Type",
            type: "text",
            name: "employee_type",
            required: true,
          },
        ]}
        add_initial_values={{ employee_type: "" }}
      />
    </div>
  );
}
