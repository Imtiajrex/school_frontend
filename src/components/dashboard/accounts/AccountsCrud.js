import Index from "components/crud/Index";
import React from "react";

export default function AccountsCrud() {
  const send_data = [
    {
      placeholder: "Entry Date",
      type: "date",
      name: "date",
      required: true,
    },
    {
      placeholder: "Entry Type",
      type: "select",
      name: "entry_type",

      options: [
        {
          text: "credit",
          value: 0,
        },
        {
          text: "debit",
          value: 1,
        },
      ],
      required: true,
    },
    {
      placeholder: "Entry Info",
      type: "text",
      name: "entry_info",
      required: true,
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
            title: "Entry Type",
            identifier: "entry_type_name",
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
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          date: "",
          entry_type: "",
          entry_info: "",
          amount: "",
        }}
      />
    </div>
  );
}
