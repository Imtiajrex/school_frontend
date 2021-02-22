import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";

import List from "../List";
import { useQuery } from "../Querytags";

export default function StudentsAttendance() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  let query = useQuery();
  const [url, setUrl] = useState("");
  const [data, setData] = useState({ cls: "", department: "", session: "" });
  React.useEffect(() => {
    let u = "students/student_attendance?group=true";
    if (query.get("class_id") != null) {
      u += "&class_id=" + query.get("class_id");
    }

    if (query.get("date") != null) u += "&date=" + query.get("date");
    if (query.get("department_id") != null)
      u += "&department_id=" + query.get("department_id");
    if (query.get("session_id") != null)
      u += "&session_id=" + query.get("session_id");

    console.log(u);
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
      setData({
        class: cls,
        department: dept,
        session: year,
        date: query.get("date"),
      });
    }
  }, [class_list, department_list, session_list]);
  return (
    <>
      {url.length > 0 ? (
        <List
          indexed={false}
          url={url}
          title="Students List"
          head={[
            "Roll",
            "ID",
            "Student Name",
            "Attendance Status",
            "Access Time",
          ]}
          val={[
            "role",
            "student_identifier",
            "student_name",
            "attendance_status",
            "access_time_group",
          ]}
          query_info={[
            { title: "Class: ", value: data.class },
            { title: "Department: ", value: data.department },
            { title: "Session: ", value: data.session },
            { title: "Date: ", value: data.date },
          ]}
        />
      ) : null}
    </>
  );
}
