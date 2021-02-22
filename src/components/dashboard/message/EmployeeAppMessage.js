import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function EmployeeAppMessage({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [employee_list, setEmployeeList] = useState([]);

  React.useEffect(() => {
    Call({
      method: "get",
      url: "employees/employee?options=true",
    })
      .then((res) => setEmployeeList(res))
      .catch((err) => console.log(err));
  }, []);

  const send_data = [
    {
      placeholder: "Employees",
      type: "select",
      name: "employee_id",
      options: employee_list,
      required: true,
    },
    {
      placeholder: "Message Title",
      type: "text",
      name: "title",
      required: true,
    },
    {
      placeholder: "Message Content",
      type: "textarea",
      name: "content",
      required: true,
    },
  ];
  const edit_data = [
    {
      placeholder: "Message Title",
      type: "text",
      name: "title",
      required: true,
    },
    {
      placeholder: "Message Content",
      type: "textarea",
      name: "content",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="App Message"
        list_url="messages/employee_message"
        list_head={[
          { title: "Employee ID", identifier: "employee_identifier" },
          { title: "Employee Name", identifier: "employee_name" },
          { title: "Title", identifier: "title" },
          { title: "Message", identifier: "content" },
        ]}
        add_button_title="Send APP Message"
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
        modal_size="md"
        add_data={send_data}
        edit_data={edit_data}
        add_initial_values={{
          employee_id: -1,
          title: "",
          message: "",
        }}
        query_title="Query Employee Messages"
        query_list={[
          {
            placeholder: "Employees",
            type: "select",
            name: "employee_id",
            options: employee_list,
            required: true,
          },
        ]}
        query_data={{
          student_id: -1,
        }}
      />
    </div>
  );
}
