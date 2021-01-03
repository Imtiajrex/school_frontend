import Index from "components/crud/Index";
import React from "react";

export default function SchoolClass() {
  return (
    <div>
      <Index
        title="Class List"
        list_url="/settings/class"
        list_head={[{ title: "Class Name", identifier: "name" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Class Name",
            type: "text",
            name: "name",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Class Name",
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
