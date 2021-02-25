import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";

export default function StudentPaymentFees({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [payment_category_list, setPaymentCategoryList] = useState([]);
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState(-1);
  const [selected_session, setSelectedSession] = useState(-1);
  const [selected_department, setSelectedDepartment] = useState(-1);
  const [student_list, setStudentList] = useState([]);

  const [class_id, setClass] = useState(-1);
  const [session_id, setSession] = useState(-1);
  const [department_id, setDepartment] = useState(-1);
  const [students, setStudents] = useState([]);
  React.useEffect(() => {
    if (
      selected_session != -1 &&
      selected_class != -1 &&
      selected_department != -1
    )
      Call({
        method: "get",
        url:
          "students/student_assignment?student_options=true&class_id=" +
          selected_class +
          "&department_id=" +
          selected_department +
          "&session_id=" +
          selected_session,
      })
        .then((res) => setStudentList(res))
        .catch((err) => console.log(err));
  }, [selected_session, selected_class, selected_department]);

  React.useEffect(() => {
    if (class_id != -1 && session_id != -1 && department_id != -1)
      Call({
        method: "get",
        url:
          "students/student_assignment?student_options=true&class_id=" +
          class_id +
          "&department_id=" +
          department_id +
          "&session_id=" +
          session_id,
      })
        .then((res) => setStudents(res))
        .catch((err) => console.log(err));
  }, [class_id, department_id, session_id]);

  React.useEffect(() => {
    if (
      selected_session != -1 &&
      selected_class != -1 &&
      selected_department != -1
    )
      Call({
        method: "get",
        url:
          "students/student_assignment?student_options=true&class_id=" +
          selected_class +
          "&department_id=" +
          selected_department +
          "&session_id=" +
          selected_session,
      })
        .then((res) => setStudentList(res))
        .catch((err) => console.log(err));
  }, [selected_session, selected_class, selected_department]);

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
      placeholder: "Session",
      type: "select",
      name: "session_id",
      options: session_list,
      setState: setSelectedSession,
      required: false,
    },
    {
      placeholder: "Class",
      type: "select",
      name: "class_id",
      options: class_list,
      setState: setSelectedClass,
      required: false,
    },
    {
      placeholder: "Department",
      type: "select",
      name: "department_id",
      options: department_list.filter(
        (element) =>
          element.class_id == selected_class &&
          element.session_id == selected_session
      ),
      setState: setSelectedDepartment,
      required: false,
    },
    {
      placeholder: "Students",
      type: "select",
      name: "student_id",
      options: student_list,
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
        list_head={[
          { title: "Student ID", identifier: "student_identifier" },
          { title: "Student Name", identifier: "student_name" },
          { title: "Payment", identifier: "payment_category" },
          { title: "Default Fees", identifier: "student_default_fees" },
        ]}
        query_data={{ student_id: "" }}
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
        add_data={add_data}
        add_initial_values={{ student_id: -1, class_id: -1, session_id: -1 }}
      />
    </div>
  );
}
