import React, { useState } from "react";
import List from "../List";
import { useQuery } from "../Querytags";

export default function EmployeePhonebook() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  React.useEffect(() => {
    let u = "employees/employee?phonebook=true&";
    if (query.get("employee_type") != null) {
      u += "employee_type=" + query.get("employee_type");
    }

    setUrl(u);
  }, []);
  return (
    <>
      {url.length > 0 ? (
        <List
          url={url}
          title="Employee Phonebook"
          head={["ID", "Employee Name", "Primary Phone", "Secondary Phone"]}
          val={[
            "employee_id",
            "employee_name",
            "employee_primary_phone",
            "employee_secondary_phone",
          ]}
          query_info={[
            { title: "Employee Type : ", value: query.get("employee_type") },
          ]}
        />
      ) : null}
    </>
  );
}
