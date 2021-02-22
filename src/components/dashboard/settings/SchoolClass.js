import Index from "components/crud/Index";
import React from "react";

export default function SchoolClass({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Class List"
        list_url="/settings/class"
        list_head={[{ title: "Class Name", identifier: "name" }]}
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
            placeholder: "Class Name",
            type: "text",
            name: "name",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Class Name",
            type: "text",
            name: "name",
            required: true,
          },
        ]}
        add_initial_values={{ name: "" }}
      />
    </div>
  );
}
