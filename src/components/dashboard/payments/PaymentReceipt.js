/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import React from "react";
import PaymentReceiptList from "./PaymentReceiptList";
export default function PaymentReceipt({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Payment Receipt List"
        list_url="/payments/student_payment_receipt"
        indexed={false}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        CustomListComponent={PaymentReceiptList}
        list_head={[
          {
            title: "Receipt No",
            identifier: "id",
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
          student_id: "",
          receipt_id: "",
        }}
      />
    </div>
  );
}
