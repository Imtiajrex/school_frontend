import Index from "components/crud/Index";
import React from "react";

export default function EmployeeTypes() {
  return (
    <div>
      <Index
        title="Employee Type List"
        list_url="/employees/employee_type"
        list_head={[{ title: "Employee Type", identifier: "employee_type" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={[
          {
            placeholder: "Employee Type",
            type: "text",
            name: "employee_type",
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Employee Type",
            type: "text",
            name: "employee_type",
            required: true,
          },
        ]}
        add_initial_values={{ employee_type: "" }}
      />
    </div>
  );
}
