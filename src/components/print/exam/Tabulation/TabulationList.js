import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import TableRow from "./TableRow";

export default function TabulationList(props) {
  const { list = [], loading = false, exam_id } = props;
  const { data_color, head_color, border_color } = props.colors;
  const { data_size, head_size } = props.size;
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
    if (exam_id != null)
      Call({
        method: "get",
        url: "exams/mark_structure?exam=true&exam_id=" + exam_id,
      })
        .then((res) => {
          let new_list = groupBy(list, "student_identifier");
          setStudentList(new_list);
          setSubjectCols(res);
        })
        .catch((err) => console.log(err));
  }, [list]);
  return (
    <>
      <Table className="align-items-center" responsive>
        <thead>
          <tr>
            <th
              rowSpan="3"
              style={{
                fontSize: head_size + "px",
                color: head_color,
                borderTop: `1px solid ${border_color}`,
              }}
            >
              Roll
            </th>
            <th
              rowSpan="3"
              style={{
                fontSize: head_size + "px",
                color: head_color,
                borderTop: `1px solid ${border_color}`,
              }}
            >
              Student Name
            </th>
          </tr>
          <tr>
            {subject_cols.map((el, index) => (
              <th
                colSpan={
                  el.structure != null ? JSON.parse(el.structure).length : 1
                }
                style={{
                  fontSize: head_size + "px",
                  color: head_color,
                  borderTop: `1px solid ${border_color}`,
                  textAlign: "center",
                }}
                key={index}
              >
                {el.subject_name}
              </th>
            ))}
          </tr>
          <tr>
            {subject_cols.map((el, idx) =>
              el.structure != null ? (
                JSON.parse(el.structure).map((element, index) => (
                  <th
                    style={{
                      textAlign: "center",
                      fontSize: "7px",
                      color: head_color,
                      borderTop: `1px solid ${border_color}`,
                    }}
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
                <TableRow
                  key={index}
                  info={element}
                  subjects={subject_cols}
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    textAlign: "center",
                  }}
                />
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
