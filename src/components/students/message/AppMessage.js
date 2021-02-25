import Index from "components/crud/Index";
import React from "react";

export default function AppMessage() {
  const student_id = localStorage.getItem("user_id");
  return (
    <div>
      <Index
        title="My Message"
        list_url="messages/student_message"
        list_head={[
          { title: "Student Name", identifier: "student_name" },
          { title: "Title", identifier: "title" },
          { title: "Message", identifier: "message" },
        ]}
        query_title="Query Student Messages"
        query_list={[
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_identifier",
            disabled: true,
            required: true,
          },
        ]}
        query_data={{
          student_identifier: student_id,
        }}
      />
    </div>
  );
}
