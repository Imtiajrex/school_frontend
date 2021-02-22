import Index from "components/crud/Index";
import React from "react";

export default function Testimonial({ permission }) {
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
      placeholder: "Name",
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
        title="Testimonial"
        list_url="/website_settings/testimonial"
        list_head={[
          {
            title: "Image",
            identifier: "image",
            type: "image",
          },
          {
            title: "Name",
            identifier: "name",
          },
          {
            title: "Content",
            identifier: "content",
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
        add_initial_values={{ image: {}, title: "", content: "" }}
      />
    </div>
  );
}
