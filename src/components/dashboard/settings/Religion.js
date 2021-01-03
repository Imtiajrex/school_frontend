import Index from "components/crud/Index";
import React from "react";

export default function Religion() {
  return (
    <div>
      <Index
        title="Religion List"
        list_url="/settings/religion"
        list_head={[{ title: "Religion Name", identifier: "religion_name" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Religion Name",
            type: "text",
            name: "religion_name",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Religion Name",
            type: "text",
            name: "religion_name",
            required: true,
          },
        ]}
        add_initial_values={{ religion_name: "" }}
      />
    </div>
  );
}
