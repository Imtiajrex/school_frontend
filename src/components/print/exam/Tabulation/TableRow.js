import React from "react";
import uuid from "react-uuid";

export default function TableRow(props) {
<<<<<<< HEAD
  const { info, subjects, style } = props;
  console.log("now");
=======
  const { info, subjects } = props;
>>>>>>> b7d9d47251c840308e1551b3cf27b97f0db7d513
  const subjectMark = (com_subject_id) => {
    return info.filter((element) => element.subject_id == com_subject_id);
  };
  return (
    <tr>
<<<<<<< HEAD
      <td style={style}>{info[0].role}</td>
      <td style={style}>{info[0].student_name}</td>
      {subjects.map((el, idx) =>
        subjectMark(el.subject_id).length > 0 ? (
          subjectMark(el.subject_id)[0].marks != undefined ? (
            subjectMark(el.subject_id)[0].marks.map((element) => (
              <th key={uuid()} className="text-center" style={style}>
                {element.value}
              </th>
            ))
          ) : (
            <th key={uuid()} className="text-center" style={style}>
              A
            </th>
          )
        ) : (
          <th key={uuid()} className="text-center" style={style}>
=======
      <td>{info[0].role}</td>
      <td>{info[0].student_name}</td>
      {subjects.map((el, idx) =>
        subjectMark(el.subject_id).length > 0 &&
        subjectMark(el.subject_id)[0].marks != undefined ? (
          subjectMark(el.subject_id)[0].marks.map((element) => (
            <th key={uuid()} className="text-center">
              {element.value}
            </th>
          ))
        ) : (
          <th key={uuid()} className="text-center">
>>>>>>> b7d9d47251c840308e1551b3cf27b97f0db7d513
            A
          </th>
        )
      )}
<<<<<<< HEAD

=======
>>>>>>> b7d9d47251c840308e1551b3cf27b97f0db7d513
      <th>
        {subjects.reduce((cb, el) => {
          cb =
            parseInt(cb) +
            parseInt(
              subjectMark(el.subject_id)[0]?.marks?.reduce(
                (ecb, element) =>
                  (ecb = parseInt(ecb) + parseInt(element.value)),
                0
              ) || 0
            );
          return cb;
        }, 0) || 0}
      </th>
    </tr>
  );
}
