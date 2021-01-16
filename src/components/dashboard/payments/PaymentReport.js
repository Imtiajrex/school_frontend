/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import React from "react";

export default function PaymentReport() {
  const send_data = [
    {
      placeholder: "Payment Category",
      type: "text",
      name: "payment_category",
      required: false,
      disabled: true,
    },
    {
      placeholder: "Payment Info",
      type: "text",
      name: "payment_info",
      required: false,
    },
    {
      placeholder: "Fees",
      type: "number",
      name: "payment_amount",
      required: true,
    },
    {
      placeholder: "Paid",
      type: "number",
      name: "paid_amount",
      required: true,
    },
  ];

  return (
    <div>
      <Index
        title="Payment List"
        list_url="/payments/student_payment"
        list_head={[
          {
            title: "Date",
            identifier: "date",
          },
          {
            title: "Payment Category",
            identifier: "payment_category",
          },
          {
            title: "Payment Info",
            identifier: "payment_info",
          },
          {
            title: "Fees",
            identifier: "payment_amount",
          },
          {
            title: "Paid",
            identifier: "paid_amount",
          },
        ]}
        edit={true}
        remove={true}
        edit_data={send_data}
        query_title="Query Student Payment List"
        query_list={[
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_id",
            required: false,
          },
        ]}
        query_data={{
          student_id: "",
        }}
      />
    </div>
  );
}
