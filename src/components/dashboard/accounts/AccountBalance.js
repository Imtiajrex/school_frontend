import Index from "components/crud/Index";
import React from "react";

export default function AccountBalance({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const send_data = [
    {
      placeholder: "Cash Balance",
      type: "number",
      name: "cash",
      required: true,
    },
    {
      placeholder: "Bank Balance",
      type: "number",
      name: "bank",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Account Balance"
        list_url="/accounts/account_balance"
        list_head={[
          {
            title: "Cash Balance",
            identifier: "cash",
          },
          {
            title: "Bank Balance",
            identifier: "bank",
          },
        ]}
        add={false}
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        remove={false}
        edit_data={send_data}
        add_initial_values={{
          cash: "",
          bank: "",
        }}
      />
    </div>
  );
}
