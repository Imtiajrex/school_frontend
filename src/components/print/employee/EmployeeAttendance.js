import React, { useState } from "react";

import List from "../List";
import { useQuery } from "../Querytags";

export default function EmployeeAttendance() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  React.useEffect(() => {
    let u = "employees/employee_attendance?group=true";
    if (query.get("date") != null) u += "&date=" + query.get("date");
    if (query.get("employee_type") != null)
      u += "&employee_type=" + query.get("employee_type");
    if (query.get("employee_id") != null)
      u += "&employee_id=" + query.get("employee_id");

    console.log(u);
    setUrl(u);
  }, []);
  return (
    <>
      {url.length > 0 ? (
        <List
          indexed={false}
          url={url}
          title="Employee Attendance"
          head={["ID", "Employee Name", "Attendance Status", "Access Time"]}
          val={[
            "employee_id",
            "employee_name",
            "attendance_status",
            "access_time_group",
          ]}
          query_info={[
            { title: "Employee Type : ", value: query.get("employee_type") },
            { title: "Date : ", value: query.get("date") },
          ]}
        />
      ) : null}
    </>
  );
}
