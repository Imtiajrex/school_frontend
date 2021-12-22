import React, { useContext, useState } from "react";
import { useQuery } from "../Querytags";
import List from "../List";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";

export default function Phonebook() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  let query = useQuery();
  const [url, setUrl] = useState("");
  const [data, setData] = useState({ class: "", department: "", session: "" });
  React.useEffect(() => {
    let u = "students/student_assignment?phonebook=true";
    if (query.get("class_id") != null)
      u += "&class_id=" + query.get("class_id");
    if (query.get("department_id") != null)
      u += "&department_id=" + query.get("department_id");
    if (query.get("session_id") != null)
      u += "&session_id=" + query.get("session_id");

    setUrl(u);
  }, []);

  React.useEffect(() => {
    if (
      class_list.length > 0 &&
      department_list.length > 0 &&
      session_list.length > 0
    ) {
      const cls_list = class_list.filter(
        (el) => el.value == query.get("class_id")
      );
      const dept_list = department_list.filter(
        (el) => el.value == query.get("department_id")
      );
      const year_list = session_list.filter(
        (el) => el.value == query.get("session_id")
      );
      const cls = cls_list.length > 0 ? cls_list[0].text : null;
      const dept = dept_list.length > 0 ? dept_list[0].text : null;
      const year = year_list.length > 0 ? year_list[0].text : null;
      setData({ class: cls, department: dept, session: year });
    }
  }, [class_list, department_list, session_list]);
  return (
    <>
      {url.length > 0 ? (
        <List
          indexed={false}
          url={url}
          title="Students Phonebook"
          head={[
            "Roll",
<<<<<<< HEAD
            "ID",
            "Student Name",
=======
            "Student Name",
            "Mother",
            "Father",
>>>>>>> b7d9d47251c840308e1551b3cf27b97f0db7d513
            "Primary Phone",
            "Secondary Phone",
          ]}
          val={[
            "role",
            "student_identifier",
<<<<<<< HEAD
=======
            "mother_name",
            "father_name",
>>>>>>> b7d9d47251c840308e1551b3cf27b97f0db7d513
            "student_name",
            "primary_phone",
            "secondary_phone",
          ]}
          query_info={[
            { title: "Class : ", value: data.class },
            { title: "Department : ", value: data.department },
            { title: "Session : ", value: data.session },
          ]}
        />
      ) : null}
    </>
  );
}
