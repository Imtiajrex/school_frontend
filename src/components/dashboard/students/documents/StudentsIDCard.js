import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";

export default function StudentIDCard() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");

  return (
    <div>
      <Index
        list_active={false}
        query_title="Query ID Card"
        query_list={[
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            setState: setSelectedSession,
            required: false,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setSelectedClass,
            required: false,
          },
          {
            placeholder: "Department",
            type: "select",
            name: "department_id",
            options: department_list.filter(
              (element) =>
                element.class_id == selected_class &&
                element.session_id == selected_session
            ),
            required: false,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
        }}
        print_url="id"
      />
    </div>
  );
}
