import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";
import Books from "./Books";

export default function BooksOperation() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState();
  const [selected_session, setSelectedSession] = useState();
  const [selected_department, setSelectedDepartment] = useState();
  const [student_list, setStudentList] = useState([]);
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

  return (
    <div>
      <Index
        title="Issue Books"
        custom_list={[]}
        CustomListComponent={Books}
        query_title="Query Student"
        query_list={[
          {
            placeholder: "Student ID",
            type: "text",
            name: "student_id",
            required: false,
          },
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            required: false,
            options: session_list,
            setState: setSelectedSession,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            required: selected_session != -1,
            options: class_list,
            setState: setSelectedClass,
          },
          {
            placeholder: "Department",
            type: "select",
            name: "department_id",
            required: selected_session != -1,
            setState: setSelectedDepartment,
            options: department_list.filter((element) => {
              return (
                element.class_id == selected_class &&
                element.session_id == selected_session
              );
            }),
          },
          {
            placeholder: "Student",
            type: "select",
            name: "student",
            required:
              selected_session != -1 ||
              selected_class != -1 ||
              selected_department != -1,
            options: student_list,
          },
        ]}
        query_data={{
          student_id: "",
          session_id: -1,
          class_id: -1,
          department_id: -1,
          student: -1,
        }}
      />
    </div>
  );
}
