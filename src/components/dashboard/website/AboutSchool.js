import Index from "components/crud/Index";
import React from "react";

export default function AboutSchool({ permission }) {
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
        title="About School"
        list_url="/website_settings/about_school"
        list_head={[
          {
            title: "Image",
            identifier: "image",
            type: "image",
          },
          {
            title: "Title",
            identifier: "title",
          },
        ]}
        file={true}
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        edit_data={send_data}
      />
    </div>
  );
}
