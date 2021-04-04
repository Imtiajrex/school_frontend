import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";
import ExtendedInput from "./ExtendedInput";

export default function StudentsCrud({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [class_id, setClass] = useState("");
  const [session_id, setSession] = useState("");
  const [selected_session, setSelectedSession] = useState("");
  const [selected_class, setSelectedClass] = useState("");
  const [religion_list, setreligion_list] = useState([]);
  const [extended_info, setextended_info] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "/settings/religion" })
      .then((res) => {
        res.map((element) => {
          element["text"] = element.religion_name;
          element["value"] = element.religion_name;
        });
        setreligion_list(res);
      })
      .catch((err) => console.log(err));
    Call({ method: "get", url: "/settings/students_extended_info?use=true" })
      .then((res) => {
        setextended_info(res);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => console.log(extended_info), [extended_info]);

  return (
    <div>
      <Index
        title="Student List"
        list_url="/students/student"
        indexed={false}
        list_head={[
          {
            title: "Roll",
            identifier: "role",
          },
          {
            title: "Name",
            identifier: "student_name",
          },
          {
            title: "Mother",
            identifier: "mother_name",
          },
          {
            title: "Father",
            identifier: "father_name",
          },
          {
            title: "Religion",
            identifier: "religion",
          },
          {
            title: "Primary Phone",
            identifier: "primary_phone",
          },
          {
            title: "Secondary Phone",
            identifier: "secondary_phone",
          },
          {
            title: "Image",
            identifier: "student_image",
            type: "image",
          },
        ]}
        file={true}
        add={false}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        remove={false}
        edit={false}
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
          {
            placeholder: "Religion",
            type: "select",
            name: "religion",
            options: religion_list,
            required: false,
          },
          {
            placeholder: "Gender",
            type: "select",
            name: "gender",
            options: [
              { text: "Male", value: "Male" },
              { text: "Female", value: "Female" },
            ],
            required: false,
          },
        ]}
        query_data={{
          session_id: -1,
          class_id: -1,
          department_id: -1,
          religion: -1,
          gender: -1,
        }}
      />
    </div>
  );
}
