import React, { createContext, useState } from "react";
import Api from "services/API/Api";
export const ClassDeptSessionContext = createContext();
function getList(setList, url) {
  Api({ method: "get", url: "settings/" + url })
    .then((res) => {
      res.data.forEach((element) => {
        element.value = element.id;
        if (url === "session") element.text = element.session;
        else element.text = element.name;
      });
      setList(res.data);
    })
    .catch((err) => console.log(err));
}
export default function ClassDeptSessionProvider(props) {
  const { children } = props;

  const [session_list, setSessionList] = useState([]);
  const [class_list, setClassList] = useState([]);
  const [department_list, setDepartmentList] = useState([]);
  const [refetch, setRefetch] = useState(false);

  React.useEffect(() => {
    getList(setClassList, "class");
    getList(setDepartmentList, "department");
    getList(setSessionList, "session");
  }, [refetch]);

  return (
    <ClassDeptSessionContext.Provider
      value={{
        session_list,
        setSessionList,
        class_list,
        setClassList,
        department_list,
        setDepartmentList,
        refetch,
        setRefetch,
      }}
    >
      {children}
    </ClassDeptSessionContext.Provider>
  );
}
