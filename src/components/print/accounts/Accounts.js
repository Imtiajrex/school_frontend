import React, { useState } from "react";
import { useQuery } from "../Querytags";
import List from "./List";

export default function Accounts() {
  let query = useQuery();
  const [url, setUrl] = useState("");
  React.useEffect(() => {
    let u = "accounts/account?";
    if (query.get("from") != null) {
      u += "from=" + query.get("from");
      if (query.get("to") != null) u += "&to=" + query.get("to");
    }
    setUrl(u);
  }, []);
  return (
    <>
      {url.length > 0 ? (
        <List
          url={url}
          title="Accounts Report"
          head={["Entry Category", "Entry Info", "Amount", "Date"]}
          val={["entry_category", "entry_info", "amount", "date"]}
        />
      ) : null}
    </>
  );
}
