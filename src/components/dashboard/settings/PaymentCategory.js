import Index from "components/crud/Index";
import React from "react";

export default function PaymentCategory({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [info_type, setInfoType] = React.useState("");
  return (
    <div>
      <Index
        title="Payment Category List"
        list_url="/settings/payment_category"
        list_head={[
          { title: "Payment Category", identifier: "category_name" },
          { title: "Info Type", identifier: "info_type" },
          { title: "Info Options", identifier: "info_options" },
          { title: "Default Amount", identifier: "default_amount" },
          { title: "Recurring Type", identifier: "recurring_type" },
        ]}
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
        add_data={[
          {
            placeholder: "Payment Category",
            type: "text",
            name: "category_name",
            required: true,
          },
          {
            placeholder: "Info Type",
            type: "select",
            name: "info_type",
            options: [
              {
                text: "Selection",
                value: "select",
              },
              {
                text: "Text Area",
                value: "textarea",
              },
            ],
            setState: setInfoType,
            required: true,
          },
          {
            placeholder: "Info Options",
            type: "text",
            name: "info_options",
            required: info_type == "select",
          },
          {
            placeholder: "Default Amount",
            type: "number",
            name: "default_amount",
            required: true,
          },
          {
            placeholder: "Recurring Type",
            type: "select",
            name: "recurring_type",
            options: [
              {
                text: "Monthly",
                value: "Monthly",
              },
              {
                text: "Occasion Based",
                value: "Ocassion Based",
              },
            ],
            required: true,
          },
        ]}
        edit_data={[
          {
            placeholder: "Payment Category",
            type: "text",
            name: "category_name",
            required: true,
          },
          {
            placeholder: "Info Type",
            type: "select",
            name: "info_type",
            options: [
              {
                name: "Selection",
                id: 1,
              },
              {
                name: "Text",
                id: 2,
              },
            ],
            required: true,
          },
          {
            placeholder: "Info Options",
            type: "text",
            name: "info_options",
            required: true,
          },
          {
            placeholder: "Default Amount",
            type: "number",
            name: "default_amount",
            required: true,
          },
          {
            placeholder: "Recurring Type",
            type: "number",
            name: "recurring_type",
            required: true,
          },
        ]}
        add_initial_values={{
          category_name: "",
          info_type: "",
          info_options: "",
          default_amount: "",
          recurring_type: "",
        }}
      />
    </div>
  );
}
