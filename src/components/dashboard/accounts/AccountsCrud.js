import Index from "components/crud/Index";
import React from "react";

export default function AccountsCrud({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const send_data = [
    {
      placeholder: "Entry Date",
      type: "date",
      name: "date",
      required: true,
    },
    {
      placeholder: "Account Type",
      type: "select",
      name: "balance_form",

      options: [
        {
          text: "Cash",
          value: "Cash",
        },
        {
          text: "Bank",
          value: "Bank",
        },
      ],
      required: true,
    },
    {
      placeholder: "Entry Type",
      type: "select",
      name: "entry_type",

      options: [
        {
          text: "Credit",
          value: "Credit",
        },
        {
          text: "Debit",
          value: "Debit",
        },
      ],
      required: true,
    },
    {
      placeholder: "Entry Category",
      type: "text",
      name: "entry_category",
      required: true,
    },
    {
      placeholder: "Entry Info",
      type: "textarea",
      name: "entry_info",
      required: false,
    },
    {
      placeholder: "Amount",
      type: "number",
      name: "amount",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Accounts Entries"
        list_url="/accounts/account"
        list_head={[
          {
            title: "Entry Date",
            identifier: "date",
          },
          {
            title: "Account Type",
            identifier: "balance_form",
          },
          {
            title: "Entry Type",
            identifier: "entry_type",
          },
          {
            title: "Entry Category",
            identifier: "entry_category",
          },
          {
            title: "Entry Info",
            identifier: "entry_info",
          },
          {
            title: "Amount",
            identifier: "amount",
          },
        ]}
        add={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        add_data={send_data}
        add_initial_values={{
          date: "",
          balance_form: -1,
          entry_type: -1,
          entry_info: "",
          entry_category: "",
          amount: "",
        }}
      />
    </div>
  );
}
