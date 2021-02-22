import Index from "components/crud/Index";
import React from "react";

export default function Album({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const send_data = [
    {
      placeholder: "Album Name",
      type: "text",
      name: "album_name",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Album List"
        list_url="/website_settings/albums"
        list_head={[
          {
            title: "Album",
            identifier: "album_name",
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
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{ album_name: "" }}
      />
    </div>
  );
}
