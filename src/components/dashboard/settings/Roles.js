import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function Roles({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [permission_list, setPermissionList] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "/settings/permission" })
      .then((res) => setPermissionList(res))
      .catch((err) => console.log(err));
  }, []);
  const send_data = [
    {
      placeholder: "Role Name",
      type: "text",
      name: "name",
      required: true,
    },
    {
      placeholder: "Permissions",
      type: "checkboxarr",
      name: "permissions",
      options: permission_list,
      required: true,
    },
  ];

  return (
    <div>
      <Index
        title="User Roles"
        list_url="/settings/role"
        modal_size="lg"
        list_head={[
          { title: "Role Name", identifier: "name" },
          { title: "Permissions", identifier: "permission_names" },
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
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{ name: "", permissions: "[]" }}
      />
    </div>
  );
}
