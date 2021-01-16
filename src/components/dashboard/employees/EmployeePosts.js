import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function EmployeePosts() {
  const [employee_type_list, setEmployeeTypeList] = useState([]);

  React.useEffect(() => {
    Call({ method: "get", url: "/employees/employee_type" })
      .then((res) => {
        res.map((element) => {
          element["text"] = element.employee_type;
          element["value"] = element.id;
        });
        setEmployeeTypeList(res);
      })
      .catch((err) => console.log(err));
  });
  const send_data = [
    {
      placeholder: "Employee Type",
      type: "select",
      name: "employee_type_id",
      options: employee_type_list,
      required: true,
    },
    {
      placeholder: "Employee Post",
      type: "text",
      name: "employee_post",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Employee Post List"
        list_url="/employees/employee_post"
        list_head={[{ title: "Employee Post", identifier: "employee_post" }]}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{ employee_post: "", employee_type_id: -1 }}
      />
    </div>
  );
}
