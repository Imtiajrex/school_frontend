import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function StudentPaymentFees({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [payment_category_list, setPaymentCategoryList] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "/settings/payment_category?use=true" })
      .then((res) => {
        res.map((element) => {
          element["value"] = element.id;
          element["text"] = element.category_name;
        });
        setPaymentCategoryList(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const add_data = [
    {
      placeholder: "Student ID",
      type: "text",
      name: "student_id",
      required: true,
    },
    {
      placeholder: "Payment Category",
      type: "select",
      name: "payment_category_id",
      options: payment_category_list,
      required: true,
    },
    {
      placeholder: "Default Fees",
      type: "text",
      name: "student_default_fees",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Student Payment Fees List"
        list_url="/students/assign_fees"
        query_title="Query Student Payment Fees"
        query_list={[
          {
            placeholder: "Student ID",
            type: "text",
            name: "std_id",
            required: true,
          },
        ]}
        list_head={[
          { title: "Student ID", identifier: "std_id" },
          { title: "Student Name", identifier: "student_name" },
          { title: "Payment", identifier: "payment_category" },
          { title: "Default Fees", identifier: "student_default_fees" },
        ]}
        query_data={{ std_id: "" }}
        add={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
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
        add_data={add_data}
        edit_data={add_data}
        add_initial_values={{ name: "", class_id: -1, session_id: -1 }}
      />
    </div>
  );
}
