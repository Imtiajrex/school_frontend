import Index from "components/crud/Index";
import { MyEditor } from "components/controls/MyEditor";
import React from "react";

export default function Articles({ permission }) {
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
      customInput: MyEditor,
      rich: true,
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Article List"
        list_url="/website_settings/homepage"
        list_head={[
          {
            title: "Title",
            identifier: "title",
          },
        ]}
        modal_size="lg"
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
        add_initial_values={{ title: "", content: "", active: -1 }}
      />
    </div>
  );
}
