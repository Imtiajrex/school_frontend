import Index from "components/crud/Index";
import React from "react";

export default function Department() {
  return (
    <div>
      <Index
        title="Department List"
        list_url="/settings/department"
        list_head={[{ title: "Department", identifier: "name" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Department Name",
            type: "text",
            name: "name",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Department Name",
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
