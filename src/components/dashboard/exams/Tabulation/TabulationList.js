import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import TableRow from "./TableRow";

export default function TabulationList(props) {
  const { list = [], list_head, loading, indexed = true, query_tags } = props;
  const [open, setopen] = useState(false);
  const [data, setdata] = useState({});
  const [student_list, setStudentList] = useState([]);
  const [subject_cols, setSubjectCols] = useState([]);
  const groupBy = (items, key) =>
    items.reduce((result, item) => {
      item["marks"] =
        item["marks"] != null && typeof item["marks"] == "string"
          ? JSON.parse(item["marks"])
          : [];
      return {
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      };
    }, {});

  React.useEffect(() => {
    let exam_id =
      query_tags.length > 0
        ? query_tags.filter((el) => el.title == "Exams")[0]["id"]
        : null;
    if (exam_id != null)
      Call({
        method: "get",
        url: "exams/mark_structure?exam=1&exam_id=" + exam_id,
      })
        .then((res) => {
          let new_list = groupBy(list, "student_identifier");
          setStudentList(new_list);
          setSubjectCols(res);
        })
        .catch((err) => console.log(err));
  }, [query_tags, list]);
  return (
    <>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            <th rowSpan="3">Roll</th>
            <th rowSpan="3">Student Name</th>
          </tr>
          <tr>
            {subject_cols.map((el, index) => (
              <th
                colSpan={
                  el.structure != null ? JSON.parse(el.structure).length : 1
                }
                style={{ textAlign: "center" }}
                key={index}
              >
                {el.subject_name}
              </th>
            ))}
            <th rowSpan="2">Total</th>
          </tr>
          <tr>
            {subject_cols.map((el, idx) =>
              el.structure != null ? (
                JSON.parse(el.structure).map((element, index) => (
                  <th
                    style={{ textAlign: "center", fontSize: "7px" }}
                    key={uuid()}
                  >
                    {element.mark_name}
                  </th>
                ))
              ) : (
                <th key={uuid()}> </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={subject_cols.length + 4} className="text-center">
                <Spinner color="primary" />
              </td>
            </tr>
          ) : Object.values(student_list).length > 0 ? (
            Object.values(student_list).map((element, index) => {
              return (
                <TableRow key={index} info={element} subjects={subject_cols} />
              );
            })
          ) : (
            <tr>
              <td colSpan={subject_cols.length + 4} className="text-center">
                Found Nothing
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
