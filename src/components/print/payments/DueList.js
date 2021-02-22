import React, { useState } from "react";
import { useQuery } from "../Querytags";
import Due from "./Due";
import { Call } from "services/API/Call";

export default function DueList() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  const [student_info, setStudentInfo] = useState({});
  React.useEffect(() => {
    let u = "payments/student_due?";
    if (query.get("student_id") != null) {
      u += "student_id=" + query.get("student_id");
      if (query.get("session") != null) u += "&session=" + query.get("session");
    }
    setUrl(u);
    Call({
      method: "get",
      url: "students/student?student_id=" + query.get("student_id"),
    })
      .then((res) => {
        setStudentInfo(res.length > 0 ? res[0] : []);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {url.length > 0 ? (
        <Due
          url={url}
          title="Students Due List"
          head={["Payment Category", "Payment Info", "Fees"]}
          val={["payment_category", "payment_info", "fees"]}
          query_info={[
            { title: "Student ID:", value: student_info.student_id },
            { title: "Student Name:", value: student_info.student_name },
          ]}
        />
      ) : null}
    </>
  );
}
