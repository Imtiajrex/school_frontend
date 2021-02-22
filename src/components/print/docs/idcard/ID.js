import React, { useState } from "react";
import { Call } from "services/API/Call";

import List from "../../List";
import { useQuery } from "../../Querytags";
import AdmitCard from "./IDCard";

export default function ID() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  const [exam_data, setExamData] = useState({});
  React.useEffect(() => {
    let u = "students/student_assignment?all=true";
    if (query.get("class_id") != null) {
      u += "&class_id=" + query.get("class_id");
      if (query.get("department_id") != null)
        u += "&department_id=" + query.get("department_id");
      if (query.get("session_id") != null)
        u += "&session_id=" + query.get("session_id");
    }

    setUrl(u);
  }, []);
  return (
    <>
      {url.length > 0 ? (
        <AdmitCard indexed={false} url={url} title="Students ID Card" />
      ) : null}
    </>
  );
}
