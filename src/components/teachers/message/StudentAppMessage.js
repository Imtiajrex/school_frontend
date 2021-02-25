import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import Api from "services/API/Api";
import { Call } from "services/API/Call";

export default function StudentAppMessage() {
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
      Api({
        method: "get",
        url:
          "students/student_assignment?student_options=true&class_id=" +
          selected_class +
          "&department_id=" +
          selected_department +
          "&session_id=" +
          selected_session,
      })
        .then((res) => setStudentList(res.data))
        .catch((err) => console.log(err));
  }, [selected_session, selected_class, selected_department]);

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
      required: false,
    },
    {
      placeholder: "Message Title",
      type: "text",
      name: "title",
      required: true,
    },
    {
      placeholder: "Message Content",
      type: "textarea",
      name: "content",
      required: true,
    },
  ];
  const edit_data = [
    {
      placeholder: "Message Title",
      type: "text",
      name: "title",
      required: true,
    },
    {
      placeholder: "Message Content",
      type: "textarea",
      name: "content",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Student App Message"
        list_url="messages/student_message"
        list_head={[
          { title: "Student ID", identifier: "student_identifier" },
          { title: "Student Name", identifier: "student_name" },
          { title: "Title", identifier: "title" },
          { title: "Message", identifier: "content" },
        ]}
        add_button_title="Send Student APP Message"
        add={true}
        edit={true}
        remove={true}
        modal_size="md"
        add_data={send_data}
        edit_data={edit_data}
        add_initial_values={{
          class_id: -1,
          department_id: -1,
          session_id: -1,
          student_id: -1,
          title: "",
          message: "",
        }}
        query_title="Query Student List"
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
          class_id: -1,
          session_id: -1,
          department_id: -1,
          student_id: -1,
        }}
      />
    </div>
  );
}
