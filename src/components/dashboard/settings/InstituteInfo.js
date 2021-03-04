import Index from "components/crud/Index";
import React from "react";

export default function InstituteInfo({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Institute Info Update"
        list_url="/settings/institute_info"
        list_head={[{ title: "Institute Name", identifier: "institute_name" }]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        file={true}
        edit_data={[
          {
            placeholder: "Institute Name",
            type: "textarea",
            name: "institute_name",
            required: true,
          },
          {
            placeholder: "Institute Motto",
            type: "textarea",
            name: "institute_motto",
            required: true,
          },
          {
            placeholder: "Institute Phonenumbers",
            type: "textarea",
            name: "institute_phonenumbers",
            required: true,
          },
          {
            placeholder: "Institute Email",
            type: "text",
            name: "institute_email",
            required: true,
          },
          {
            placeholder: "Institute Facebook",
            type: "textarea",
            name: "institute_facebook",
            required: true,
          },
          {
            placeholder: "Institute Youtube",
            type: "textarea",
            name: "institute_youtube",
            required: true,
          },
          {
            placeholder: "Institute Address",
            type: "textarea",
            name: "institute_address",
            required: true,
          },
          {
            placeholder: "Institute Logo",
            type: "file",
            name: "institute_logo",
            required: false,
          },
        ]}
        def_url_param="update=true"
      />
    </div>
  );
}
