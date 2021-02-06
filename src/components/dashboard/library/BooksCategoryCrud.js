import Index from "components/crud/Index";
import React from "react";

export default function BooksCategoryCrud() {
  const send_data = [
    {
      placeholder: "Book Category Name",
      type: "text",
      name: "category_name",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Book Category List"
        list_url="/library/books_category"
        list_head={[{ title: "Book Category", identifier: "category_name" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          category_name: "",
        }}
      />
    </div>
  );
}
