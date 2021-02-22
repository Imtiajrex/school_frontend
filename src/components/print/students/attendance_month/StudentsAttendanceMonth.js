import React, { useContext, useState } from "react";

import List from "./List";
import { useQuery } from "../../Querytags";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";

export default function StudentsAttendanceMonth() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  let query = useQuery();
  const [url, setUrl] = useState("");
  const [year, setYear] = useState();
  const [data, setData] = useState({ class: "", department: "", session: "" });
  const month_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  React.useEffect(() => {
    if (session_list.length > 0) {
      let u = "students/student_monthly_attendance?group=true";
      if (query.get("class_id") != null) {
        u += "&class_id=" + query.get("class_id");
      }

      if (query.get("month") != null) u += "&month=" + query.get("month");
      if (query.get("year") != null) u += "&year=" + query.get("year");
      if (query.get("student_id") != null)
        u += "&student_id=" + query.get("student_id");
      if (query.get("department_id") != null)
        u += "&department_id=" + query.get("department_id");
      if (query.get("session_id") != null)
        u += "&session_id=" + query.get("session_id");

      setUrl(u);
      setYear(session_list.filter((e) => e.value == query.get("year"))[0].text);
    }
  }, [session_list]);

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
      {url.length > 0 && year != undefined ? (
        <List
          year={year}
          month={query.get("month")}
          indexed={false}
          url={url}
          title="Students Monthly Attendance"
          query_info={[
            { title: "Class : ", value: data.class },
            { title: "Department : ", value: data.department },
            { title: "Session : ", value: data.session },
            { title: "Month : ", value: month_names[query.get("month")] },
            { title: "Year : ", value: year },
          ]}
        />
      ) : null}
    </>
  );
}
