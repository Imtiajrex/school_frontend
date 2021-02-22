/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";

export default function ExamCrud({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, session_list, department_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState();
  const [selected_session, setSelectedSession] = useState();
  const [subject_list, setSubjectList] = useState([]);
  const [selected_department, setSelectedDepartment] = useState();
  const [class_id, setClassID] = useState();
  const [session_id, setSessionID] = useState();
  React.useEffect(() => {
    Call({ method: "get", url: "settings/assign_subject?exam=true" })
      .then((res) => {
        setSubjectList(res.length > 0 ? res : []);
      })
      .catch((err) => console.log(err));
  }, []);
  const send_data = [
    {
      placeholder: "Exam",
      type: "text",
      name: "exam_name",
      required: true,
    },
    {
      placeholder: "Session",
      type: "select",
      name: "session_id",
      required: true,
      options: session_list,
      setState: setSelectedSession,
    },
    {
      placeholder: "Class",
      type: "select",
      name: "class_id",
      required: true,
      options: class_list,
      setState: setSelectedClass,
    },
    {
      placeholder: "Department",
      type: "select",
      name: "department_id",
      required: true,
      setState: setSelectedDepartment,
      options: department_list.filter((element) => {
        return (
          element.class_id == selected_class &&
          element.session_id == selected_session
        );
      }),
    },
    {
      placeholder: "Subjects",
      type: "checkboxarr",
      name: "subjects",
      options: subject_list.filter((element) => {
        return (
          element.class_id == selected_class &&
          element.department_id == selected_department
        );
      }),
      required: true,
    },
  ];

  return (
    <>
      <Index
        title="Exams List"
        list_url="/exams/exam"
        list_head={[
          { title: "Exam", identifier: "exam_name" },
          { title: "Session", identifier: "session" },
          { title: "Class", identifier: "class" },
          { title: "Department", identifier: "department" },
          { title: "Subjects", identifier: "subject_names" },
        ]}
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
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          exam_name: "",
          session_id: "",
          class_id: "",
          department_id: "",
          subjects: "[]",
        }}
        query_title="Query Student List"
        query_list={[
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            setState: setSessionID,
            required: false,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setClassID,
            required: false,
          },
          {
            placeholder: "Department",
            type: "select",
            name: "department_id",
            options: department_list.filter(
              (element) =>
                element.class_id == class_id && element.session_id == session_id
            ),
            required: false,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
        }}
      />
    </>
  );
}
