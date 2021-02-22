import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";

export default function AppMessage() {
  const student_id = localStorage.getItem("user_id");
  return (
    <div>
      <Index
        title="App Message"
        list_url="messages/app_message"
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
            name: "student_id",
            disabled: true,
            required: true,
          },
        ]}
        query_data={{
          student_id,
        }}
      />
    </div>
  );
}
