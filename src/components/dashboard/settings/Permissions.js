import Index from "components/crud/Index";
import React from "react";

export default function Permissions({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Permission List"
        list_url="/settings/permission"
        list_head={[
          { title: "Permission", identifier: "name" },
          { title: "Parent Controller", identifier: "parent_controller" },
          { title: "Parent Group", identifier: "parent_group" },
        ]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
      />
    </div>
  );
}
