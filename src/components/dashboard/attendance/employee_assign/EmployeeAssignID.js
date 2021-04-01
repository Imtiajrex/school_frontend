import Index from "components/crud/Index";
import React, { useState } from "react";
import Api from "services/API/Api";
import EmployeeAssignList from "./EmployeeAssignList";
export default function EmployeeAssignID({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [employee_type_list, setEmployeeTypeList] = useState([]);

  React.useEffect(() => {
    Api({ method: "get", url: "/employees/employee_type" })
      .then((res) => {
        res.data.map((element) => {
          element["text"] = element.employee_type;
          element["value"] = element.employee_type;
        });
        setEmployeeTypeList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Index
        title="Employee List"
        list_url="/employees/employee"
        list_head={[
          {
            title: "Employee ID",
            identifier: "employee_id",
          },
          {
            title: "Employee Name",
            identifier: "employee_name",
          },
        ]}
        indexed={false}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        CustomListComponent={EmployeeAssignList}
        query_title="Query Employee List"
        query_list={[
          {
            placeholder: "Employee Type",
            type: "select",
            name: "employee_type",
            options: employee_type_list,
            required: false,
          },
        ]}
        query_data={{}}
      />
    </div>
  );
}
