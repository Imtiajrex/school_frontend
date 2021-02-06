import Index from "components/crud/Index";
import { MyEditor } from "components/controls/MyEditor";
import React, { useMemo, useState } from "react";
import { Call } from "services/API/Call";

export default function SubPages() {
  const [page_list, setPageList] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "website_settings/pages?option=true" })
      .then((res) => setPageList(res))
      .catch((err) => console.log(err));
  }, []);
  const send_data = [
    {
      placeholder: "Sub Page Title",
      type: "text",
      name: "page_title",
      required: true,
    },
    {
      placeholder: "Sub Page Content",
      type: "textarea",
      name: "page_content",
      customInput: MyEditor,
      required: true,
    },
    {
      placeholder: "Parent Page",
      type: "select",
      name: "page_parent",
      options: page_list,
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
        title="Sub Pages List"
        list_url="/website_settings/sub_pages"
        list_head={[
          {
            title: "Title",
            identifier: "page_title",
          },
          {
            title: "Parent page",
            identifier: "page_parent_title",
          },
          {
            title: "Status",
            identifier: "page_status",
          },
        ]}
        add={true}
        modal_size="lg"
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          page_title: "",
          page_content: "",
          page_parent: -1,
          active: -1,
        }}
      />
    </div>
  );
}
