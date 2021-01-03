import Index from "components/crud/Index";
import React from "react";

export default function GPA() {
  return (
    <div>
      <Index
        title="GPA"
        list_url="/settings/gpa"
        list_head={[
          { title: "GPA", identifier: "gpa" },
          { title: "Start From", identifier: "starting_number" },
          { title: "End In", identifier: "ending_number" },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Start From",
            type: "number",
            name: "starting_number",
            required: true,
          },
          {
            placeholder: "End In",
            type: "number",
            name: "ending_number",
            required: true,
          },
          {
            placeholder: "GPA",
            type: "number",
            name: "gpa",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Start From",
            type: "number",
            name: "starting_number",
            required: true,
          },
          {
            placeholder: "End In",
            type: "number",
            name: "ending_number",
            required: true,
          },
          {
            placeholder: "GPA",
            type: "number",
            name: "gpa",
            required: true,
          },
        ]}
        add_initial_values={{ starting_number: "", ending_number: "", gpa: "" }}
      />
    </div>
  );
}
