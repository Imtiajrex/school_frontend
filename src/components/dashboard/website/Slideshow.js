import Index from "components/crud/Index";
import React from "react";

export default function Slideshow({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const send_data = [
    {
      placeholder: "Image",
      type: "file",
      name: "image",
      required: true,
    },
    {
      placeholder: "Caption",
      type: "textarea",
      name: "caption",
      required: false,
    },
  ];
  return (
    <div>
      <Index
        title="Slideshow"
        list_url="/website_settings/slideshow"
        list_head={[
          {
            title: "Image",
            identifier: "image_name",
            type: "image",
          },
          {
            title: "Caption",
            identifier: "caption",
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
        add_data={send_data}
        add_initial_values={{ image: {}, caption: "" }}
      />
    </div>
  );
}
