import Index from "components/crud/Index";
import { MyEditor } from "components/controls/MyEditor";
import React, { useMemo, useState } from "react";

export default function Pages() {
  const send_data = [
    {
      placeholder: "Page Title",
      type: "text",
      name: "page_title",
      required: true,
    },
    {
      placeholder: "Page Content",
      type: "textarea",
      name: "page_content",
      customInput: MyEditor,
      required: true,
    },
    {
      placeholder: "Page Status",
      type: "select",
      name: "active",
      options: [
        { text: "Active", value: 1 },
        { text: "Inactive", value: 0 },
      ],
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Page List"
        list_url="/website_settings/pages"
        list_head={[
          {
            title: "Title",
            identifier: "page_title",
          },
          {
            title: "Page Status",
            identifier: "page_status",
          },
        ]}
        add={true}
        modal_size="lg"
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{ page_title: "", page_content: "" }}
      />
    </div>
  );
}
