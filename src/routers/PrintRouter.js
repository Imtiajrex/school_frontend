import ClassDeptSessionProvider from "contexts/ClassDeptSessionContext";
import React from "react";
import print_routes from "routes/print_routes";
import createRoutes from "./createRoutes";
export default function PrintRouter({ menu_list }) {
  return (
    <>
      <ClassDeptSessionProvider>
        {createRoutes(print_routes)}
      </ClassDeptSessionProvider>
    </>
  );
}
