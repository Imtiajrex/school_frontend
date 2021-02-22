import React, { useState } from "react";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";

export default function AttendanceList(props) {
  const { query_tags, list, list_head, loading, indexed = true } = props;
  const date =
    query_tags.length > 0
      ? query_tags.filter((element) => element.title == "Date")[0]["value"]
      : "";
  const [updated_list, setUpdatedList] = useState([]);
  React.useEffect(() => {
    if (list.length > 0) {
      var merged = [];

      list.forEach(function (item) {
        var idx;
        var found = merged.some(function (el, i) {
          idx = el.student_id === item.student_id ? i : null;
          return el.student_id === item.student_id;
        });
        if (!found) {
          merged.push(item);
        } else if (idx !== null) {
          merged[idx]["access_time"] += "\n" + item.access_time;
        }
      });
      setUpdatedList(merged);
    }
  }, [list]);
  return (
    <Table className="align-items-center table-dark table-flush" responsive>
      <thead className="thead-dark">
        <tr>
          {indexed ? <th scope="col">#</th> : null}
          {list_head.map((item, index) => (
            <th key={uuid()}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={list_head.length + 3} className="text-center">
              <Spinner color="primary" />
            </td>
          </tr>
        ) : typeof list == "object" && list.length > 0 ? (
          updated_list.map((element, index) => (
            <tr key={uuid()}>
              {indexed ? (
                <th scope="row" key={index}>
                  {index + 1}
                </th>
              ) : null}
              {list_head.map((item, index) => (
                <th key={uuid()} style={{ whiteSpace: "pre" }}>
                  {item.identifier != "date" ? element[item.identifier] : date}
                </th>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={list_head.length + 3} className="text-center">
              Found Nothing
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
