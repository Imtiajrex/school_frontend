import Index from "components/crud/Index";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import Api from "services/API/Api";

export default function StudentAdmitCard() {
  const { class_list, session_list, department_list } = useContext(
    ClassDeptSessionContext
  );
  const [department_id, setSelectedDepartment] = useState();
  const [class_id, setClassID] = useState();
  const [session_id, setSessionID] = useState();
  const [exam_list, setExamList] = useState([]);

  React.useEffect(() => {
    if (session_id != -1 && class_id != -1 && department_id != -1) {
      Api({
        method: "get",
        url:
          "exams/exam?result=true&session_id=" +
          session_id +
          "&class_id=" +
          class_id +
          "&department_id=" +
          department_id,
      })
        .then((res) => {
          res.data.map((el) => {
            el["text"] = el.name;
            el["value"] = el.id;
          });
          setExamList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [session_id, class_id, department_id]);
  return (
    <div>
      <Index
        list_active={false}
        query_title="Query ID Card"
        query_list={[
          {
            placeholder: "Session",
            type: "select",
            name: "session_id",
            options: session_list,
            setState: setSessionID,
            required: false,
          },
          {
            placeholder: "Class",
            type: "select",
            name: "class_id",
            options: class_list,
            setState: setClassID,
            required: false,
          },
          {
            placeholder: "Department",
            type: "select",
            name: "department_id",
            options: department_list.filter(
              (element) =>
                element.class_id == class_id && element.session_id == session_id
            ),
            setState: setSelectedDepartment,
            required: false,
          },
          {
            placeholder: "Exams",
            type: "select",
            name: "exam_id",
            options: exam_list,
            required: true,
          },
        ]}
        query_data={{
          class_id: -1,
          session_id: -1,
          department_id: -1,
          exam_id: -1,
        }}
        print_url="admit"
      />
    </div>
  );
}
