import Index from "components/crud/Index";
import React from "react";

export default function Subject() {
  return (
    <div>
      <Index
        title="Subject List"
        list_url="/settings/subject"
        list_head={[{ title: "Subject Name", identifier: "subject_name" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Subject Name",
            type: "text",
            name: "subject_name",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Subject Name",
            type: "text",
            name: "subject_name",
            required: true,
          },
        ]}
        add_initial_values={{ subject_name: "" }}
      />
    </div>
  );
}
