import Index from "components/crud/Index";
import React, { useState } from "react";

export default function StudentsExtendedInfo() {
  const [type, settype] = useState("");
  const send_data = [
    {
      placeholder: "Type",
      type: "select",
      name: "type",
      options: [
        { value: "select", text: "Selection" },
        { value: "text", text: "Small Text" },
        { value: "number", text: "Number" },
        { value: "textarea", text: "Big Text" },
      ],
      setState: settype,
      required: true,
    },
    {
      placeholder: "Placeholder",
      type: "text",
      name: "placeholder",
      required: true,
    },
    {
      placeholder: "Options",
      type: "text",
      name: "options",
      required: type == "select",
    },
  ];
  return (
    <div>
      <Index
        title="Students Extended Info List"
        list_url="/settings/students_extended_info"
        list_head={[
          { title: "Type", identifier: "type" },
          { title: "Placeholder", identifier: "placeholder" },
          { title: "Options", identifier: "options" },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{ type: -1, placeholder: "", options: "" }}
      />
    </div>
  );
}
