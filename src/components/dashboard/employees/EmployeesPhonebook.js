import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Call } from "services/API/Call";

export default function EmployeesPhonebook({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [religion_list, setreligion_list] = useState([]);
  const [employee_type_list, setEmployeeTypeList] = useState([]);

  React.useEffect(() => {
    Call({ method: "get", url: "/settings/religion" })
      .then((res) => {
        res.map((element) => {
          element["text"] = element.religion_name;
          element["value"] = element.religion_name;
        });
        setreligion_list(res);
      })
      .catch((err) => console.log(err));
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
        title="Employee Phonebook"
        list_url="/employees/employee"
        list_head={[
          {
            title: "ID",
            identifier: "employee_id",
          },
          {
            title: "Employee Name",
            identifier: "employee_name",
          },
          {
            title: "Primary Phone",
            identifier: "employee_primary_phone",
          },
          {
            title: "Secondary Phone",
            identifier: "employee_secondary_phone",
          },
        ]}
        query_title="Query Employee List"
        query_list={[
          {
            placeholder: "Employee ID",
            type: "text",
            name: "employee_id",
            required: false,
          },
          {
            placeholder: "Employee Type",
            type: "select",
            name: "employee_type",
            options: employee_type_list,
            required: false,
          },
          {
            placeholder: "Religion",
            type: "select",
            name: "religion",
            options: religion_list,
            required: false,
          },
          {
            placeholder: "Gender",
            type: "select",
            name: "gender",
            options: [
              { text: "Male", value: "Male" },
              { text: "Female", value: "Female" },
            ],
            required: false,
          },
          {
            placeholder: "Age",
            type: "number",
            name: "age",
            required: false,
          },
        ]}
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        query_data={{
          employee_id: "",
          employee_type: -1,
          religion: -1,
          gender: -1,
          age: "",
        }}
        print_url="employees/phonebook"
      />
    </div>
  );
}
