import Index from "components/crud/Index";
import React from "react";

export default function WeekDays({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const data = [
    {
      placeholder: "Day",
      type: "select",
      name: "day",
      options: [
        { text: "Saturday", value: 6 },
        { text: "Sunday", value: 0 },
        { text: "Monday", value: 1 },
        { text: "Tuesday", value: 2 },
        { text: "Wednesday", value: 3 },
        { text: "Thursday", value: 4 },
        { text: "Friday", value: 5 },
      ],
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Weekdays"
        list_url="/settings/weekdays"
        list_head={[{ title: "Day", identifier: "day_name" }]}
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
        add_data={data}
        add_initial_values={{ day: "" }}
      />
    </div>
  );
}
