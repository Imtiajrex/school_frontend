/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";
import MarkList from "./MarkList";

export default function Marks({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, session_list, department_list } = useContext(
    ClassDeptSessionContext
  );
  const [department_id, setSelectedDepartment] = useState();
  const [class_id, setClassID] = useState();
  const [session_id, setSessionID] = useState();
  const [exam_list, setExamList] = useState([]);

  React.useEffect(() => {
    if (session_id != -1 && class_id != -1 && department_id != -1) {
      Call({
        method: "get",
        url:
          "exams/exam?result=true&session_id=" +
          session_id +
          "&class_id=" +
          class_id +
          "&department_id=" +
          department_id,
      })
        .then((res) => {
          res.map((el) => {
            el["text"] = el.name;
            el["value"] = el.id;
          });
          setExamList(res);
        })
        .catch((err) => console.log(err));
    }
  }, [session_id, class_id, department_id]);

  return (
    <>
      <Index
        title="Marks Assignment"
        list_url="/exams/exam_subjects"
        list_head={[
          { title: "Subject", identifier: "subject" },
          { title: "Exam", identifier: "exam" },
          { title: "Session", identifier: "session" },
          { title: "Class", identifier: "class" },
          { title: "Department", identifier: "department" },
        ]}
        CustomListComponent={MarkList}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
        query_title="Query Exam Subject List"
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
            setState: setSelectedDepartment,
            required: false,
          },
          {
            placeholder: "Exams",
            type: "select",
            name: "exam_id",
            options: exam_list,
            required: true,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
          exam_id: -1,
        }}
      />
    </>
  );
}
