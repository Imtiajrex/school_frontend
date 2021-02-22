import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";
import AttendanceListMonth from "./AttendanceListMonth";
export default function AttendanceReportMonth({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { session_list } = useContext(ClassDeptSessionContext);
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
    <div className="employee_attendance">
      <Index
        title="Employee Attendance Month"
        list_url="/employees/employee_monthly_attendance"
        CustomListComponent={AttendanceListMonth}
        add={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        remove={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.delete) != -1
        }
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
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
            placeholder: "Year",
            type: "select",
            name: "year",
            options: session_list,
            required: true,
          },
          {
            placeholder: "Month",
            type: "select",
            name: "month",
            options: [
              { text: "January", value: "01" },
              { text: "February", value: "02" },
              { text: "March", value: "03" },
              { text: "April", value: "04" },
              { text: "May", value: "05" },
              { text: "June", value: "06" },
              { text: "July", value: "07" },
              { text: "August", value: "08" },
              { text: "September", value: "09" },
              { text: "October", value: "10" },
              { text: "November", value: "11" },
              { text: "December", value: "12" },
            ],
            required: true,
          },
        ]}
        query_data={{
          employee_type: -1,
          employee_id: "",
          year: -1,
          month: -1,
        }}
        print_url="employees/monthly_attendance"
      />
    </div>
  );
}
