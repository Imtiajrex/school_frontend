import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";
import AttendanceListDay from "./AttendanceListDay";
export default function AttendanceReportDay({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [employee_type_list, setEmployeeTypelist] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "/employees/employee_type" })
      .then((res) => {
        res.map((element) => {
          element["text"] = element.employee_type;
          element["value"] = element.employee_type;
        });
        setEmployeeTypelist(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Index
        title="Employee Attendance Day"
        list_url="/employees/employee_attendance"
        list_head={[
          {
            title: "Employee ID",
            identifier: "employee_id",
          },
          {
            title: "Employee Type",
            identifier: "employee_type",
          },
          {
            title: "Employee Name",
            identifier: "employee_name",
          },
          {
            title: "Date",
            identifier: "date",
          },
          {
            title: "Attendance",
            identifier: "attendance_status",
          },
          {
            title: "Access Time",
            identifier: "access_time",
          },
        ]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        CustomListComponent={AttendanceListDay}
        query_title="Query Employee Attendance"
        query_list={[
          {
            placeholder: "Employee Type",
            type: "select",
            name: "employee_type",
            options: employee_type_list,
            required: false,
          },
          {
            placeholder: "Employee ID",
            type: "text",
            name: "employee_id",
            required: false,
          },
          {
            placeholder: "Date",
            type: "date",
            name: "date",
            required: true,
          },
        ]}
        query_data={{
          employee_type: -1,
          employee_id: "",
          date: "",
        }}
        print_url="employees/attendance"
      />
    </div>
  );
}
