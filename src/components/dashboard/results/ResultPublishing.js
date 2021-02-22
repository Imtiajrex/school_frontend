import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";
import PublishList from "./PublishList";

export default function ResultPublishing({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, session_list, department_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState();
  const [selected_department, setSelectedDepartment] = useState();
  const [selected_session, setSelectedSession] = useState();

  const [result_list, setResultList] = useState([]);

  React.useEffect(() => {
    if (
      selected_class != -1 &&
      selected_session != -1 &&
      selected_department != -1
    ) {
      Call({
        method: "get",
        url:
          "results/result?result=true&session_id=" +
          selected_session +
          "&class_id=" +
          selected_class +
          "&department_id=" +
          selected_department,
      })
        .then((res) => setResultList(res))
        .catch((err) => console.log(err));
    }
  }, [selected_session, selected_class, selected_department]);

  return (
    <div>
      <Index
        title="Results List"
        list_url="/results/result_publishing"
        list_head={[
          { title: "Student ID", identifier: "student_identifier" },
          { title: "Student name", identifier: "student_name" },
          { title: "Result", identifier: "result_name" },
          { title: "Result Status", identifier: "result_status" },
        ]}
        CustomListComponent={PublishList}
        add_initial_values={{
          result_name: "",
          class_id: -1,
          department_id: -1,
          session_id: -1,
          exams: [],
        }}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        query_title="Query Student List"
        query_list={[
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
              (element) =>
                element.class_id == selected_class &&
                element.session_id == selected_session
            ),
            required: true,
            setState: setSelectedDepartment,
          },
          {
            placeholder: "Result",
            type: "select",
            name: "result_id",
            options: result_list.filter(
              (element) =>
                element.class_id == selected_class &&
                element.session_id == selected_session &&
                element.department_id == selected_department
            ),
            required: true,
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
