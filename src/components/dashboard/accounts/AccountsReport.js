import Index from "components/crud/Index";
import React from "react";

export default function AccountsCrud() {
  return (
    <div>
      <Index
        title="Accounts Report"
        list_url="/accounts/account"
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
        query_data={{ from: "", to: "" }}
      />
    </div>
  );
}
