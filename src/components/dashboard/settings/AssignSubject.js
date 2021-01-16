/* eslint-disable eqeqeq */
import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";

export default function AssignSubject() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [subject_list, setSubjectList] = useState([]);
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");

  const [selected_query_class, setQueryClass] = useState("");
  const [selected_query_session, setQuerySession] = useState("");

  React.useEffect(() => {
    Call({ method: "get", url: "/settings/subject" })
      .then((res) => {
        res.map((element) => {
          element["name"] = element.subject_name;
        });
        setSubjectList(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const send_data = [
    {
      placeholder: "Session",
      type: "select",
      name: "session_id",
      options: session_list,
      setState: setSelectedSession,
      required: true,
    },
    {
      placeholder: "Class",
      type: "select",
      name: "class_id",
      options: class_list,
      setState: setSelectedClass,
      required: true,
    },
    {
      placeholder: "Department",
      type: "select",
      name: "department_id",
      options: department_list.filter(
        (element) => element.class_id == selected_class
      ),
      required: true,
    },
    {
      placeholder: "Subjects",
      type: "checkboxarr",
      name: "subjects",
      options: subject_list,
      required: true,
    },
  ];
  React.useEffect(() => {
    console.log(selected_query_class);
  }, [selected_query_class]);
  return (
    <div>
      <Index
        title="Assigned Subjects"
        list_url="/settings/assign_subject"
        query_title="Get Assigned Subject List"
        query_list={[
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            setState: setQuerySession,
            required: true,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setQueryClass,
            required: true,
          },
          {
            placeholder: "Department",
            type: "select",
            name: "department_id",
            options: department_list.filter(
              (element) =>
                element.class_id == selected_query_class &&
                element.session_id == selected_query_session
            ),
            required: true,
          },
        ]}
        query_data={{ class_id: -1, department_id: -1 }}
        list_head={[
          { title: "Class", identifier: "class" },
          { title: "Department", identifier: "department" },
          { title: "Subject", identifier: "name" },
        ]}
        add={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{ class_id: "", department_id: "", subjects: "[]" }}
      />
    </div>
  );
}
