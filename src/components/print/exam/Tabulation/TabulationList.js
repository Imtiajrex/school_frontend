import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import TableRow from "./TableRow";

export default function TabulationList(props) {
  const { list = [], list_head, loading, indexed = true, exam_id } = props;
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
  const sortByRoll = (list) => {
    let new_list = {};

    Object.values(list).map(
      (el) => (new_list[el[0].role + el[0].student_identifier] = el)
    );
    return new_list;
  };
  React.useEffect(() => {
    if (exam_id != null)
      Call({
        method: "get",
        url: "exams/mark_structure?exam=1&exam_id=" + exam_id,
      })
        .then((res) => {
          let new_list = groupBy(list, "student_identifier");
          new_list = sortByRoll(new_list);
          setStudentList(new_list);
          setSubjectCols(res);
        })
        .catch((err) => console.log(err));
  }, [exam_id, list]);
  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
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
