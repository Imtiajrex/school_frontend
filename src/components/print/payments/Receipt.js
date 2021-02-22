import React, { useState } from "react";
import { useQuery } from "../Querytags";
import List from "./List";

export default function Receipt() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  React.useEffect(() => {
    let u = "payments/student_payment_receipt?";
    if (query.get("receipt_id") != null) {
      u += "receipt_id=" + query.get("receipt_id");
    }
    setUrl(u);
  }, []);
  return (
    <>
      {url.length > 0 ? (
        <List
          url={url}
          title="Students Payment Receipt"
          head={[
            "Date",
            "Payment Category",
            "Payment Info",
            "Fees",
            "Paid Amount",
          ]}
          val={[
            "date",
            "payment_category",
            "payment_info",
            "payment_amount",
            "paid_amount",
          ]}
          student_id={query.get("student_id")}
          receipt_id={query.get("receipt_id")}
        />
      ) : null}
    </>
  );
}
