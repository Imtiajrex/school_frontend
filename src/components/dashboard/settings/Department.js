import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";

export default function Department() {
  const { class_list, session_list } = useContext(ClassDeptSessionContext);

  const [selected_query_class, setQueryClass] = useState("");
  const add_data = [
    {
      placeholder: "Department Name",
      type: "text",
      name: "name",
      required: true,
    },
    {
      placeholder: "Class",
      type: "select",
      name: "class_id",
      required: true,
      options: class_list,
    },
    {
      placeholder: "Session",
      type: "select",
      name: "session_id",
      required: true,
      options: session_list,
    },
  ];
  return (
    <div>
      <Index
        title="Department List"
        list_url="/settings/department"
        query_title="Query Department List"
        query_list={[
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setQueryClass,
            required: true,
          },
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            required: true,
          },
        ]}
        list_head={[
          { title: "Department", identifier: "name" },
          { title: "Class", identifier: "class" },
          { title: "Session", identifier: "session" },
        ]}
        query_data={{ class_id: -1, session_id: -1 }}
        add={true}
        edit={true}
        remove={true}
        add_data={add_data}
        edit_data={add_data}
        add_initial_values={{ name: "", class_id: -1, session_id: -1 }}
      />
    </div>
  );
}
