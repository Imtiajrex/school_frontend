/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext } from "react";

export default function PaymentReport() {
  const student_id = localStorage.getItem("user_id");
  const { session_list } = useContext(ClassDeptSessionContext);

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
        query_title="Query Student Payment List"
        query_list={[
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_id",
            required: true,
            disabled: true,
          },
          {
            placeholder: "Session",
            type: "select",
            name: "session",
            options: session_list,
            required: true,
          },
        ]}
        query_data={{
          student_id,
        }}
      />
    </div>
  );
}
