import Index from "components/crud/Index";
import { MyEditor } from "components/controls/MyEditor";
import React, { useMemo, useState } from "react";

export default function Pages({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const send_data = [
    {
      placeholder: "Page Title",
      type: "text",
      name: "page_title",
      required: true,
    },
    {
      placeholder: "Page Content",
      type: "textarea",
      name: "page_content",
      customInput: MyEditor,
      rich: true,
      required: true,
    },
    {
      placeholder: "Page Status",
      type: "select",
      name: "active",
      options: [
        { text: "Active", value: 1 },
        { text: "Inactive", value: 0 },
      ],
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Page List"
        list_url="/website_settings/pages"
        list_head={[
          {
            title: "Title",
            identifier: "page_title",
          },
          {
            title: "Page Status",
            identifier: "page_status",
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
        add_initial_values={{ page_title: "", page_content: "", active: -1 }}
      />
    </div>
  );
}
