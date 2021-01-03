import Index from "components/crud/Index";
import React from "react";

export default function Users() {
  return (
    <div>
      <Index
        title="User List"
        list_url="/settings/user"
        list_head={[
          { title: "Name", identifier: "name" },
          { title: "Username", identifier: "username" },
          { title: "User Type", identifier: "user_type" },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "User Type",
            type: "select",
            name: "user_type",
            required: true,
          },
          {
            placeholder: "Name",
            type: "text",
            name: "name",
            required: true,
          },
          {
            placeholder: "Username",
            type: "text",
            name: "username",
            required: true,
          },
          {
            placeholder: "Password",
            type: "password",
            name: "password",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "User Type",
            type: "text",
            name: "user_type",
            required: true,
          },
          {
            placeholder: "Name",
            type: "text",
            name: "name",
            required: true,
          },
          {
            placeholder: "Username",
            type: "text",
            name: "username",
            required: true,
          },
          {
            placeholder: "Password",
            type: "password",
            name: "password",
            required: true,
          },
        ]}
        add_initial_values={{
          name: "",
          username: "",
          user_type: "",
          password: "",
        }}
      />
    </div>
  );
}
