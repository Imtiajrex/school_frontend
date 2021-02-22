import React, { useState } from "react";

import EmployeeAttendanceTable from "./EmployeeAttendanceTable";

const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};
export default function AttendanceList(props) {
  const { query_tags, list, loading, indexed = true } = props;
  const [head, sethead] = useState([]);
  const [slice_length, setSliceLength] = useState(5);
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");

  React.useEffect(() => {
    if (query_tags.length > 0) {
      setyear(query_tags.filter((el) => el.title == "Year")[0].value);
      setmonth(months[query_tags.filter((el) => el.title == "Month")[0].value]);
    }
    sethead(Object.keys(list));
  }, [list, query_tags]);
  return (
    <>
      {[...Array(Math.ceil(head.length / slice_length))].map((el, i) => (
        <EmployeeAttendanceTable
          key={i}
          list={list}
          top={head.slice(
            (i + 1) * slice_length - slice_length,
            (i + 1) * slice_length
          )}
          loading={loading}
          year={year}
          month={month}
          indexed={indexed}
        />
      ))}
    </>
  );
}
