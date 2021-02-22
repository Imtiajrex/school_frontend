/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext } from "react";
import PaymentReceiptList from "./PaymentReceiptList";
export default function PaymentReceipt() {
  const student_id = localStorage.getItem("user_id");
  const { session_list } = useContext(ClassDeptSessionContext);
  return (
    <div>
      <Index
        title="Payment Receipt List"
        list_url="/payments/student_payment_receipt"
        indexed={false}
        CustomListComponent={PaymentReceiptList}
        list_head={[
          {
            title: "Receipt No",
            identifier: "id",
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
        query_title="Query Receipt List"
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
            required: false,
          },
          {
            placeholder: "Receipt No",
            type: "text",
            name: "receipt_id",
            required: false,
          },
        ]}
        query_data={{
          student_id,
          receipt_id: "",
        }}
      />
    </div>
  );
}
