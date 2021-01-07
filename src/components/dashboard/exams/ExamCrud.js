/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";

export default function ExamCrud() {
  const { class_list, session_list, department_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState();
  const [selected_session, setSelectedSession] = useState();
  const [subject_list, setSubjectList] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "settings/subject" })
      .then((res) => {
        res.map((element) => (element["name"] = element.subject_name));
        setSubjectList(res);
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
      options: subject_list,
      required: true,
    },
  ];

  return (
    <div>
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
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          exam_name: "",
          session_id: "",
          class_id: "",
          department_id: "",
          subjects: "[]",
        }}
      />
    </div>
  );
}
