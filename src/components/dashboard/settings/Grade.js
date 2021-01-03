import Index from "components/crud/Index";
import React from "react";

export default function Grade() {
  return (
    <div>
      <Index
        title="GPA"
        list_url="/settings/grade"
        list_head={[
          { title: "Grade", identifier: "grade" },
          { title: "Starting GPA", identifier: "starting_gpa" },
          { title: "Ending GPA", identifier: "ending_gpa" },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Starting GPA",
            type: "number",
            name: "starting_gpa",
            required: true,
          },
          {
            placeholder: "Ending GPA",
            type: "number",
            name: "ending_gpa",
            required: true,
          },
          {
            placeholder: "Grade",
            type: "text",
            name: "grade",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Starting GPA",
            type: "number",
            name: "starting_gpa",
            required: true,
          },
          {
            placeholder: "Ending GPA",
            type: "number",
            name: "ending_gpa",
            required: true,
          },
          {
            placeholder: "Grade",
            type: "text",
            name: "grade",
            required: true,
          },
        ]}
        add_initial_values={{ starting_gpa: "", ending_gpa: "", grade: "" }}
      />
    </div>
  );
}
