import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";
import ExtendedInput from "../students/ExtendedInput";

export default function AccountsCrud({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [religion_list, setreligion_list] = useState([]);
  const [employee_post_list, setEmployeePostList] = useState([]);
  const [employee_type_list, setEmployeeTypeList] = useState([]);

  const [selected_employee_type, setSelectedEmployeeType] = useState([]);

  const [extended_info, setExtendedInfo] = useState([]);
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
    Call({ method: "get", url: "/employees/employee_post" })
      .then((res) => {
        res.map((element) => {
          element["text"] = element.employee_post;
          element["value"] = element.employee_post;
        });
        setEmployeePostList(res);
      })
      .catch((err) => console.log(err));
    Call({ method: "get", url: "/settings/employees_extended_info?use=true" })
      .then((res) => {
        setExtendedInfo(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const add_data = [
    {
      placeholder: "Employee Name",
      type: "text",
      name: "employee_name",
      required: true,
    },
    {
      placeholder: "Employee Mother Name",
      type: "text",
      name: "mother_name",
      required: true,
    },
    {
      placeholder: "Employee Father Name",
      type: "text",
      name: "father_name",
      required: true,
    },
    {
      placeholder: "Employee Image",
      type: "file",
      name: "employee_image",
      required: false,
    },
    {
      placeholder: "Employee Type",
      type: "select",
      name: "employee_type",
      options: employee_type_list,
      setState: setSelectedEmployeeType,
      required: true,
    },
    {
      placeholder: "Employee Post",
      type: "select",
      name: "employee_post",
      options: employee_post_list.filter(
        (element) => element.employee_type == selected_employee_type
      ),
      required: true,
    },
    {
      placeholder: "Gender",
      type: "select",
      name: "employee_gender",
      options: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" },
      ],
      required: true,
    },
    {
      placeholder: "Religion",
      type: "select",
      name: "employee_religion",
      options: religion_list,
      required: true,
    },
    {
      placeholder: "Age",
      type: "number",
      name: "employee_age",
      required: true,
    },
    {
      placeholder: "Primary Phone",
      type: "text",
      name: "employee_primary_phone",
      required: true,
    },
    {
      placeholder: "Secondary Phone",
      type: "text",
      name: "employee_secondary_phone",
      required: false,
    },
    {
      placeholder: "Employee Email",
      type: "email",
      name: "employee_email",
      required: false,
    },
    {
      customInput: ExtendedInput,
      title: "Employee's Additional Info",
      name: "employee_extended_info",
      children: extended_info,
    },
  ];
  const edit_data = [
    {
      placeholder: "Employee Name",
      type: "text",
      name: "employee_name",
      required: true,
    },
    {
      placeholder: "Employee Mother Name",
      type: "text",
      name: "mother_name",
      required: true,
    },
    {
      placeholder: "Employee Father Name",
      type: "text",
      name: "father_name",
      required: true,
    },
    {
      placeholder: "Employee Image",
      type: "file",
      name: "employee_image",
      required: false,
    },
    {
      placeholder: "Employee Type",
      type: "select",
      name: "employee_type",
      options: employee_type_list,
      setState: setSelectedEmployeeType,
      required: true,
    },
    {
      placeholder: "Employee Post",
      type: "select",
      name: "employee_post",
      options: employee_post_list.filter(
        (element) => element.employee_type == selected_employee_type
      ),
      required: true,
    },
    {
      placeholder: "Gender",
      type: "select",
      name: "employee_gender",
      options: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" },
      ],
      required: true,
    },
    {
      placeholder: "Religion",
      type: "select",
      name: "employee_religion",
      options: religion_list,
      required: true,
    },
    {
      placeholder: "Age",
      type: "number",
      name: "employee_age",
      required: true,
    },
    {
      placeholder: "Primary Phone",
      type: "text",
      name: "employee_primary_phone",
      required: true,
    },
    {
      placeholder: "Secondary Phone",
      type: "text",
      name: "employee_secondary_phone",
      required: false,
    },
    {
      placeholder: "Employee Email",
      type: "email",
      name: "employee_email",
      required: false,
    },
    {
      placeholder: "Job Status",
      type: "select",
      name: "job_status",
      options: [
        { text: "Employee", value: "employee" },
        { text: "Left", value: "left" },
      ],
      required: true,
    },
    {
      customInput: ExtendedInput,
      title: "Employee's Additional Info",
      name: "employee_extended_info",
      children: extended_info,
    },
  ];
  return (
    <div>
      <Index
        title="Employee List"
        list_url="/employees/employee"
        list_head={[
          {
            title: "Image",
            identifier: "employee_image",
            type: "image",
          },
          {
            title: "ID",
            identifier: "employee_id",
          },
          {
            title: "Name",
            identifier: "employee_name",
          },
          {
            title: "Employee Type",
            identifier: "employee_type",
          },
          {
            title: "Employee Post",
            identifier: "employee_post",
          },
          {
            title: "Age",
            identifier: "employee_age",
          },
          {
            title: "Gender",
            identifier: "employee_gender",
          },
          {
            title: "Religion",
            identifier: "employee_religion",
          },
        ]}
        file={true}
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
        add_data={add_data}
        edit_data={edit_data}
        add_initial_values={{
          employee_name: "",
          mother_name: "",
          father_name: "",
          employee_image: {},

          employee_type: -1,
          employee_post: -1,
          employee_gender: -1,
          employee_religion: -1,
          employee_age: "",
          employee_primary_phone: "",
          employee_secondary_phone: "",
          employee_email: "",
          employee_extended_info: "{}",
        }}
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
        query_data={{
          employee_id: "",
          employee_type: -1,
          religion: -1,
          gender: -1,
          age: "",
        }}
        print_url="employees/list"
      />
    </div>
  );
}
