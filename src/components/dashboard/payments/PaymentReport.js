/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import Api from "services/API/Api";

export default function PaymentReport({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [class_id, setClass] = useState(-1);
  const [session_id, setSession] = useState(-1);
  const [department_id, setDepartment] = useState(-1);
  const [students, setStudents] = useState([]);
  React.useEffect(() => {
    if (class_id != -1 && session_id != -1 && department_id != -1)
      Api({
        method: "get",
        url:
          "students/student_assignment?student_options=true&class_id=" +
          class_id +
          "&department_id=" +
          department_id +
          "&session_id=" +
          session_id,
      })
        .then((res) => setStudents(res.data))
        .catch((err) => console.log(err));
  }, [class_id, department_id, session_id]);
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
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            setState: setSession,
            required: true,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setClass,
            required: true,
          },
          {
            placeholder: "Department",
            type: "select",
            name: "department_id",
            options: department_list.filter(
              (element) =>
                element.class_id == class_id && element.session_id == session_id
            ),
            setState: setDepartment,
            required: true,
          },
          {
            placeholder: "Students",
            type: "select",
            name: "student_id",
            options: students,
            required: true,
          },
        ]}
        query_data={{
          student_id: -1,
        }}
        print_url="payments/list"
      />
    </div>
  );
}
