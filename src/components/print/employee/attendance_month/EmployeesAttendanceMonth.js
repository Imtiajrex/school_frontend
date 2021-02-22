import React, { useContext, useState } from "react";

import List from "./List";
import { useQuery } from "../../Querytags";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";

export default function EmployeesAttendanceMonth() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  const { session_list } = useContext(ClassDeptSessionContext);
  const [year, setYear] = useState();
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
      let u = "employees/employee_monthly_attendance?group=true";
      if (query.get("month") != null) u += "&month=" + query.get("month");
      if (query.get("year") != null) {
        u += "&year=" + query.get("year");
        setYear(
          session_list.filter((e) => e.value == query.get("year"))[0].text
        );
      }
      if (query.get("employee_id") != null)
        u += "&employee_id=" + query.get("employee_id");
      if (query.get("employee_type") != null)
        u += "&employee_type=" + query.get("employee_type");

      setUrl(u);
    }
  }, [session_list]);
  return (
    <>
      {url.length > 0 && year != undefined ? (
        <List
          year={year}
          month={query.get("month")}
          indexed={false}
          url={url}
          title="Employee Monthly Attendance"
          query_info={[
            { title: "Employee Type : ", value: query.get("employee_type") },
            { title: "Month : ", value: month_names[query.get("month")] },
            { title: "Year : ", value: year },
          ]}
        />
      ) : null}
    </>
  );
}
