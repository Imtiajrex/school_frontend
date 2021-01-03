import Index from "components/crud/Index";
import React from "react";

export default function Session() {
  return (
    <div>
      <Index
        title="Permission List"
        list_url="/settings/permission"
        list_head={[
          { title: "Permission", identifier: "name" },
          { title: "Parent Controller", identifier: "parent_controller" },
          { title: "Parent Group", identifier: "parent_group" },
        ]}
      />
    </div>
  );
}
