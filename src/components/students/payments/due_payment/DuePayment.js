import Index from "components/crud/Index";
import React from "react";
import DuePaymentList from "./DuePaymentList";

export default function DuePayment() {
  const student_id = localStorage.getItem("user_id");
  return (
    <div>
      <Index
        title="Due List"
        list_url="/payments/student_due"
        CustomListComponent={DuePaymentList}
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
            title: "Due Category",
            identifier: "payment_category",
          },
          {
            title: "Due Info",
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
            name: "student_identifier",
            required: true,
            disabled: true,
          },
        ]}
        query_data={{
          student_identifier: student_id,
        }}
      />
    </div>
  );
}
