import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function Users() {
  const [roles_list, setRolesList] = useState([]);
  const user_type_list = [
    { value: "admin", text: "admin" },
    { value: "teacher", text: "teacher" },
    { value: "student", text: "student" },
  ];
  React.useEffect(() => {
    Call({ method: "get", url: "/settings/role" })
      .then((res) => {
        res.map((element) => {
          element["value"] = element.id;
          element["text"] = element.name;
        });
        setRolesList(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const send_data = [
    {
      placeholder: "User Type",
      type: "select",
      name: "user_type",
      options: [
        { value: "admin", text: "admin" },
        { value: "teacher", text: "teacher" },
        { value: "student", text: "student" },
      ],
      required: true,
    },
    {
      placeholder: "Name",
      type: "text",
      name: "name",
      required: true,
    },
    {
      placeholder: "Username",
      type: "text",
      name: "username",
      required: true,
    },
    {
      placeholder: "User Role",
      type: "select",
      name: "role",
      options: roles_list,
      required: true,
    },
    {
      placeholder: "Password",
      type: "password",
      name: "password",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="User List"
        list_url="/settings/user"
        query_title="Query Department List"
        query_list={[
          {
            placeholder: "User Type",
            type: "select",
            name: "user_type",
            options: user_type_list,
            required: true,
          },
        ]}
        list_head={[
          { title: "Name", identifier: "name" },
          { title: "Username", identifier: "username" },
          { title: "User Type", identifier: "user_type" },
          { title: "Roles", identifier: "role" },
        ]}
        query_data={{ user_type: -1 }}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          name: "",
          username: "",
          user_type: "",
          password: "",
        }}
      />
    </div>
  );
}
