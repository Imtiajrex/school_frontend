/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext } from "react";

export default function PaymentReport({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { session_list } = useContext(ClassDeptSessionContext);
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
        edit_data={send_data}
        query_title="Query Student Payment List"
        query_list={[
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_id",
            required: true,
          },
          {
            placeholder: "Year",
            type: "select",
            name: "session",
            options: session_list,
            required: true,
          },
        ]}
        query_data={{
          student_id: "",
          session_list: -1,
        }}
        print_url="payments/list"
      />
    </div>
  );
}
