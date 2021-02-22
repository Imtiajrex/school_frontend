import React, { useState } from "react";
import { useQuery } from "../Querytags";
import List from "../List";
import { Call } from "services/API/Call";

export default function PaymentList() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  const [student_info, setStudentInfo] = useState({});
  React.useEffect(() => {
    let u = "payments/student_payment?";
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
        <List
          url={url}
          title="Students Payment List"
          head={[
            "Payment Category",
            "Payment Info",
            "Fees",
            "Payment Amount",
            "Date",
          ]}
          val={[
            "payment_category",
            "payment_info",
            "payment_amount",
            "paid_amount",
            "date",
          ]}
          query_info={[
            { title: "Student ID:", value: student_info.student_id },
            { title: "Student Name:", value: student_info.student_name },
          ]}
        />
      ) : null}
    </>
  );
}
