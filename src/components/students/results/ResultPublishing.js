import Index from "components/crud/Index";
import React from "react";
import ResultList from "./ResultList";

export default function ResultPublishing() {
  const student_id = localStorage.getItem("user_id");

  return (
    <div>
      <Index
        title="Results List"
        list_url={
          "/results/result?student=true&student_identifier=" + student_id
        }
        list_head={[
          {
            title: "Result Name",
            identifier: "result_name",
          },
        ]}
        CustomListComponent={ResultList}
      />
    </div>
  );
}
