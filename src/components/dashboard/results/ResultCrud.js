import Index from "components/crud/Index";
import React from "react";

export default function ExamCrud() {
  const add_data = [
    {
      placeholder: "Result Name",
      type: "text",
      name: "result_name",
      required: true,
    },
    {
      placeholder: "Class",
      type: "text",
      name: "class_id",
      required: true,
    },
    {
      placeholder: "Department",
      type: "text",
      name: "department_id",
      required: true,
    },
    {
      placeholder: "Session",
      type: "text",
      name: "session_id",
      required: true,
    },
    {
      placeholder: "Exams",
      type: "checkboxarr",
      name: "exams",
      options: [
        { id: 1, name: "First Term" },
        { id: 2, name: "Second Term" },
      ],
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Results List"
        list_url="/results/result"
        list_head={[
          { title: "Result name", identifier: "result_name" },
          { title: "Class", identifier: "class_id" },
          { title: "Department", identifier: "department_id" },
          { title: "Session", identifier: "session_id" },
          { title: "Exams", identifier: "exams" },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={add_data}
        edit_data={add_data}
        add_initial_values={{
          result_name: "",
          class_id: "",
          department_id: "",
          session_id: "",
          exams: "[]",
        }}
      />
    </div>
  );
}
