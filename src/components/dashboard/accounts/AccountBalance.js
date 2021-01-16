import Index from "components/crud/Index";
import React from "react";

export default function AccountBalance() {
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
        edit={true}
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
