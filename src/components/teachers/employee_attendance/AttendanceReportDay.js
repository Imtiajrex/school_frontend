import Index from "components/crud/Index";
import React from "react";
import AttendanceListDay from "./AttendanceListDay";
export default function AttendanceReportDay() {
  const employee_id = localStorage.getItem("user_id");
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
        CustomListComponent={AttendanceListDay}
        query_title="Query Employee Attendance"
        query_list={[
          {
            placeholder: "Employee ID",
            type: "text",
            name: "employee_id",
            disabled: true,
            hidden: true,
            required: true,
          },
          {
            placeholder: "Date",
            type: "date",
            name: "date",
            required: true,
          },
        ]}
        query_data={{
          employee_id,
          date: "",
        }}
      />
    </div>
  );
}
