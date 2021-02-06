import Index from "components/crud/Index";
import React from "react";

export default function Album() {
  const send_data = [
    {
      placeholder: "Album Name",
      type: "text",
      name: "album_name",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Album List"
        list_url="/website_settings/albums"
        list_head={[
          {
            title: "Album",
            identifier: "album_name",
          },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{ album_name: "" }}
      />
    </div>
  );
}
