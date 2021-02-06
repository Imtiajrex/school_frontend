import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";
import ResultExamInput from "./ResultExamInput";

export default function ResultCrud() {
  const { class_list, session_list, department_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState();
  const [selected_session, setSelectedSession] = useState();

  const [exam_list, setExamList] = useState([]);
  const [class_id, setClass] = useState(-1);
  const [session_id, setSession] = useState(-1);
  const [department_id, setDepartment] = useState(-1);

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
        .then((res) => setExamList(res))
        .catch((err) => console.log(err));
    }
  }, [session_id, class_id, department_id]);
  const add_data = [
    {
      placeholder: "Result Name",
      type: "text",
      name: "result_name",
      required: true,
    },
    {
      placeholder: "Session",
      type: "select",
      name: "session_id",
      required: true,
      options: session_list,
      setState: setSession,
    },
    {
      placeholder: "Class",
      type: "select",
      name: "class_id",
      required: true,
      options: class_list,
      setState: setClass,
    },
    {
      placeholder: "Department",
      type: "select",
      name: "department_id",
      setState: setDepartment,
      options: department_list.filter(
        (element) =>
          element.class_id == class_id && element.session_id == session_id
      ),
      required: true,
    },
    {
      placeholder: "Exams",
      type: "custom",
      name: "exams",
      options: exam_list,
      required: true,
      customInput: ResultExamInput,
    },
  ];
  return (
    <div>
      <Index
        title="Results List"
        list_url="/results/result"
        list_head={[
          { title: "Result name", identifier: "result_name" },
          { title: "Exams", identifier: "exams" },
          { title: "Session", identifier: "session" },
          { title: "Class", identifier: "class" },
          { title: "Department", identifier: "department" },
        ]}
        add={true}
        remove={true}
        add_data={add_data}
        add_initial_values={{
          result_name: "",
          class_id: -1,
          department_id: -1,
          session_id: -1,
          exams: [],
        }}
        query_title="Query Student List"
        query_list={[
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
            required: false,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
        }}
      />
    </div>
  );
}
