import Index from "components/crud/Index";
import React from "react";

export default function BooksCategoryCrud({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
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
        add={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        remove={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.delete) != -1
        }
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          category_name: "",
        }}
      />
    </div>
  );
}
