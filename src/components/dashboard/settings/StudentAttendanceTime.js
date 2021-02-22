import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext } from "react";

export default function StudentAttendanceTime({ permission }) {
  const { class_list, session_list } = useContext(ClassDeptSessionContext);
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const data = [
    {
      placeholder: "Session",
      type: "select",
      name: "session_id",
      options: session_list,
      required: true,
    },
    {
      placeholder: "Class",
      type: "select",
      name: "class_id",
      options: class_list,
      required: true,
    },
    {
      placeholder: "School Start",
      type: "time",
      name: "start_time",
      required: true,
    },
    {
      placeholder: "School End",
      type: "time",
      name: "end_time",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Student Attendance Time"
        list_url="/settings/student_attendance_time"
        list_head={[
          { title: "Session", identifier: "session" },
          { title: "Class", identifier: "class" },
          { title: "School Start", identifier: "start_time" },
          { title: "School End", identifier: "end_time" },
        ]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        add={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
        remove={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.delete) != -1
        }
        add_data={data}
        add_initial_value={{
          class_id: -1,
          session_id: -1,
          start_time: "",
          end_time: "",
        }}
        query_title="Get Attendance Time"
        query_list={[
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            required: true,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            required: true,
          },
        ]}
        query_data={{ class_id: -1, session_id: -1 }}
      />
    </div>
  );
}
