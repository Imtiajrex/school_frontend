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
        title="Accounts Report"
        list_url="/accounts/account"
        edit_data={send_data}
        list_head={[
          {
            title: "Date",
            identifier: "date",
          },
          {
            title: "Balance",
            identifier: "balance_form",
          },
          {
            title: "Type",
            identifier: "entry_type",
          },
          {
            title: "Category",
            identifier: "entry_category",
          },
          {
            title: "Info",
            identifier: "entry_info",
          },
          {
            title: "Amount",
            identifier: "amount",
          },
        ]}
        query_title="Query Account Report"
        query_list={[
          {
            placeholder: "From",
            type: "date",
            name: "from",
            required: true,
          },
          {
            placeholder: "To",
            type: "date",
            name: "to",
            required: true,
          },
        ]}
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
        query_data={{ from: "", to: "" }}
        print_url="accounts/report"
      />
    </div>
  );
}
