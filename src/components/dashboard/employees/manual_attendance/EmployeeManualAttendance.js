import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";
import ManualAttendanceList from "./ManualAttendanceList";

export default function EmployoeeManualAttendance() {
  const [employee_type_list, setEmployeeTypeList] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "/employees/employee_type" })
      .then((res) => {
        res.map((element) => {
          element["text"] = element.employee_type;
          element["value"] = element.employee_type;
        });
        setEmployeeTypeList(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Index
        title="Employee Manual Attendance"
        list_url="/employees/mark_attendance"
        list_head={[
          {
            title: "Employee ID",
            identifier: "employee_id",
          },
          {
            title: "Employee Name",
            identifier: "employee_name",
          },
          {
            title: "Attendance Status",
            identifier: "attendance_status",
          },
        ]}
        CustomListComponent={ManualAttendanceList}
        query_title="Query Employee List"
        query_list={[
          {
            placeholder: "Date",
            type: "date",
            name: "date",
            required: true,
          },
          {
            placeholder: "Employee Type",
            type: "select",
            name: "employee_type",
            options: employee_type_list,
            required: true,
          },
        ]}
        query_data={{
          date: "",
          employee_type: -1,
        }}
      />
    </div>
  );
}
