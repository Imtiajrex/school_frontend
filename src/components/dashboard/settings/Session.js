import Index from "components/crud/Index";
import React from "react";

export default function Session() {
  return (
    <div>
      <Index
        title="Session List"
        list_url="/settings/session"
        list_head={[{ title: "Session", identifier: "session" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Session",
            type: "number",
            name: "session",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Session",
            type: "number",
            name: "session",
            required: true,
          },
        ]}
        add_initial_values={{ session: "" }}
      />
    </div>
  );
}
