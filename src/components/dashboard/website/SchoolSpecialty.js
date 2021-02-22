import Index from "components/crud/Index";
import React from "react";

export default function SchoolSpecialty({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const send_data = [
    {
      placeholder: "Title",
      type: "text",
      name: "title",
      required: true,
    },
    {
      placeholder: "Content",
      type: "textarea",
      name: "content",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="School Specialty"
        list_url="/website_settings/school_specialty"
        list_head={[
          {
            title: "Title",
            identifier: "title",
          },
        ]}
        file={true}
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
        edit_data={send_data}
        add_data={send_data}
        add_initial_values={{ title: "", content: "" }}
      />
    </div>
  );
}
