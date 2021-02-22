import Index from "components/crud/Index";
import React from "react";
import StudentPaymentList from "./DuePaymentList";

export default function DuePayment() {
  return (
    <div>
      <Index
        title="Due Payment"
        list_url="/payments/student_due"
        CustomListComponent={StudentPaymentList}
        remove={true}
        edit={true}
        edit_data={[
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
            disabled: true,
          },
          {
            placeholder: "Fees",
            type: "number",
            name: "amount",
            required: true,
          },
        ]}
        query_title="Query Student Due List"
        list_head={[
          {
            title: "Student ID",
            identifier: "student_identifier",
          },
          {
            title: "Student Name",
            identifier: "student_name",
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
            title: "Amount",
            identifier: "amount",
          },
        ]}
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
        print_url="payments/due_list"
      />
    </div>
  );
}
