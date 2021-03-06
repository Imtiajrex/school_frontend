import Index from "components/crud/Index";
import React from "react";

export default function Session({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Session List"
        list_url="/settings/session"
        list_head={[{ title: "Session", identifier: "session" }]}
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
            placeholder: "Session",
            type: "number",
            name: "session",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Session",
            type: "number",
            name: "session",
            required: true,
          },
        ]}
        add_initial_values={{ session: "" }}
      />
    </div>
  );
}
