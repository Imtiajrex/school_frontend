import React, { useState } from "react";

import List from "../List";
import { useQuery } from "../Querytags";
export default function EmployeeList() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  React.useEffect(() => {
    let u = "employees/employee?";
    if (query.get("employee_type") != null) {
      u += "employee_type=" + query.get("employee_type");
    }

    setUrl(u);
  }, []);
  return (
    <>
      {url.length > 0 ? (
        <List
          indexed={false}
          url={url}
          title="Employee List"
          head={[
            "ID",
            "Employee Name",
            "Mother Name",
            "Father Name",
            "Religion",
            "Gender",
            "Age",
          ]}
          val={[
            "employee_id",
            "employee_name",
            "mother_name",
            "father_name",
            "employee_religion",
            "employee_gender",
            "employee_age",
          ]}
          query_info={[
            { title: "Employee Type : ", value: query.get("employee_type") },
          ]}
        />
      ) : null}
    </>
  );
}
