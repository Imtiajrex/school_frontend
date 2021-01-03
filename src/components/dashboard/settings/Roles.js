import Index from "components/crud/Index";
import React from "react";

export default function Roles() {
  return (
    <div>
      <Index
        title="User Roles"
        list_url="/settings/role"
        list_head={[{ title: "Role Name", identifier: "name" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Role Name",
            type: "text",
            name: "name",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Role Name",
            type: "text",
            name: "name",
            required: true,
          },
        ]}
        add_initial_values={{ name: "" }}
      />
    </div>
  );
}
