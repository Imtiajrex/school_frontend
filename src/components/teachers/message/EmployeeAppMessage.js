import Index from "components/crud/Index";
import React from "react";

export default function EmployeeAppMessage() {
  const employee_id = localStorage.getItem("user_id");
  return (
    <div>
      <Index
        title="My Message"
        list_url={"messages/employee_message?employee_id=" + employee_id}
        list_head={[
          { title: "Employee ID", identifier: "employee_identifier" },
          { title: "Employee Name", identifier: "employee_name" },
          { title: "Title", identifier: "title" },
          { title: "Message", identifier: "content" },
        ]}
        add_button_title="Send APP Message"
        modal_size="md"
      />
    </div>
  );
}
