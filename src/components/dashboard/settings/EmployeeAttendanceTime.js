import Index from "components/crud/Index";
import React from "react";

export default function EmployeeAttendanceTime({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  return (
    <div>
      <Index
        title="Employee Attendance Time"
        list_url="/settings/employee_attendance_time"
        list_head={[
          { title: "School Start", identifier: "start_time" },
          { title: "School End", identifier: "end_time" },
        ]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        edit_data={[
          {
            placeholder: "School Start",
            type: "time",
            name: "start_time",
            required: true,
          },
          {
            placeholder: "School End",
            type: "time",
            name: "end_time",
            required: true,
          },
        ]}
      />
    </div>
  );
}
