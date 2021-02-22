import Index from "components/crud/Index";
import React from "react";

export default function Subject({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Subject List"
        list_url="/settings/subject"
        list_head={[{ title: "Subject Name", identifier: "subject_name" }]}
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
            placeholder: "Subject Name",
            type: "text",
            name: "subject_name",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Subject Name",
            type: "text",
            name: "subject_name",
            required: true,
          },
        ]}
        add_initial_values={{ subject_name: "" }}
      />
    </div>
  );
}
