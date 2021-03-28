import React from "react";
import uuid from "react-uuid";

export default function TableRow(props) {
  const { info, subjects } = props;
  console.log("now");
  const subjectMark = (com_subject_id) => {
    return info.filter((element) => element.subject_id == com_subject_id);
  };
  return (
    <tr>
      <td>{info[0].role}</td>
      <td>{info[0].student_name}</td>
      {subjects.map((el, idx) =>
        subjectMark(el.subject_id).length > 0 ? (
          subjectMark(el.subject_id)[0].marks != undefined ? (
            subjectMark(el.subject_id)[0].marks.map((element) => (
              <th key={uuid()} className="text-center">
                {element.value}
              </th>
            ))
          ) : (
            <th key={uuid()} className="text-center">
              A
            </th>
          )
        ) : (
          <th key={uuid()} className="text-center">
            A
          </th>
        )
      )}
    </tr>
  );
}
