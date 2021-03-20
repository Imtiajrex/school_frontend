import InputField from "components/controls/InputField";
import React, { useState } from "react";
import Alert from "reactstrap/lib/Alert";
import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import Input from "reactstrap/lib/Input";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";
import Toast from "reactstrap/lib/Toast";
import ToastBody from "reactstrap/lib/ToastBody";
import ToastHeader from "reactstrap/lib/ToastHeader";
import { Call } from "services/API/Call";

export default function MarkAssignment({ data }) {
  const { exam_id, session_id, department_id, class_id, subject_id } = data;
  const [calling, setCalling] = useState(true);
  const [student_list, setStudentList] = useState([]);
  const [show, setShow] = useState(false);
  const [fail, setFail] = useState(false);
  const deleteField = (idx) => {
    let new_fields = [...mark_fields];
    let new_data = [...form_data];
    new_fields.splice(idx, 1);
    new_data.map((el) => el.marks.splice(idx, 1));
    setMarkFields(new_fields);
    setFormData(new_data);
  };
  const validate = () => {
    let status = false;
    status = mark_fields.every((el) => {
      return el.mark_name != "" && el.total_mark != "";
    });
    if (!status) return false;
    status = form_data.every((el) =>
      el.marks.length > 0
        ? el.marks.every((element) => {
            return (
              element.title != "" &&
              element.title != null &&
              element.value != "" &&
              element.value != null
            );
          })
        : false
    );
    if (!status) return false;
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setCalling(true);
      Call({
        method: "post",
        url: "exams/marks",
        data: {
          mark_structure_id,
          exam_id,
          session_id,
          department_id,
          class_id,
          subject_id,
          total_exam_mark,
          mark_data: form_data,
          mark_structure: mark_fields,
        },
      })
        .then((res) => {
          setCalling(false);
          setShow(true);
          setTimeout(() => setShow(false), 1500);
          console.log(res);
        })
        .catch((err) => {
          setCalling(false);
          setFail(true);
          setTimeout(() => setFail(false), 1500);
          console.log(err);
        });
    }
  };
  const [form_data, setFormData] = useState([]);
  const [mark_fields, setMarkFields] = useState([]);
  const [mark_structure_id, setMarkStructureID] = useState("");
  const [total_exam_mark, setTotalExamMark] = useState();
  React.useEffect(() => {
    Call({
      method: "get",
      url:
        "exams/mark_structure?exam_id=" + exam_id + "&subject_id=" + subject_id,
    })
      .then((res) => {
        if (res[0] != null) {
          const structure = JSON.parse(res[0].structure);
          setTotalExamMark(res[0].total_exam_mark);
          setMarkStructureID(res[0].id);
          setMarkFields(
            structure != undefined || structure != null ? structure : []
          );
        }
      })
      .catch((err) => console.log(err));
    Call({
      method: "get",
      url:
        "exams/student_marks?exam_id=" +
        exam_id +
        "&session_id=" +
        session_id +
        "&department_id=" +
        department_id +
        "&class_id=" +
        class_id +
        "&subject_id=" +
        subject_id,
    })
      .then((res) => {
        let new_form_data = [];
        res.map((el, idx) => {
          const t_mark = JSON.parse(el.marks == null ? "[]" : el.marks).reduce(
            (cb, val) =>
              (cb = parseInt(cb) + parseInt(val.value != "" ? val.value : 0)),
            0
          );
          new_form_data.push({
            id: el.id,
            student_id: el.student_id,
            exam_id: el.exam_id,
            subject_id: el.subject_id,
            subject_type: false,
            absent: false,
            total_mark: t_mark,
            marks: JSON.parse(el.marks == null ? "[]" : el.marks),
          });
        });
        setFormData(new_form_data);
        setStudentList(res);

        setCalling(false);
      })
      .catch((err) => {
        setCalling(false);
        console.log(err);
      });
  }, []);
  return (
    <Form role="form" onSubmit={handleSubmit}>
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th rowSpan="2" style={{ padding: "0.1rem" }}>
              #
            </th>
            <th rowSpan="2" style={{ padding: "0.1rem" }}>
              ID
            </th>
            <th rowSpan="2" style={{ padding: "0.1rem" }}>
              Name
            </th>
            <th rowSpan="2" style={{ padding: "0.1rem" }}>
              Optional
            </th>
            <th rowSpan="2" style={{ padding: "0.1rem" }}>
              Absent
            </th>
            <th
              colSpan={mark_fields.length + 1}
              className="text-center"
              style={{ padding: "0.1rem" }}
            >
              Marks (Total Mark :{" "}
              {mark_fields.reduce(
                (cb, val) =>
                  (cb =
                    parseInt(cb) +
                    parseInt(val.total_mark != "" ? val.total_mark : 0)),
                0
              )}
              )
            </th>
          </tr>
          <tr>
            {mark_fields.length > 0
              ? mark_fields.map((el, idx) => (
                  <th key={idx} style={{ padding: "0.1rem" }}>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => deleteField(idx)}
                    >
                      <i className="fas fa-times" />
                    </Button>
                    <InputField
                      style={{ minWidth: "110px" }}
                      type="text"
                      placeholder="Mark Name"
                      handleChange={(e) => {
                        let new_val = [...mark_fields];
                        new_val[idx].mark_name = e.target.value;
                        let new_data = [...form_data];
                        new_data.map(
                          (element, index) =>
                            (element["marks"][idx].title = e.target.value)
                        );
                        setFormData(new_data);
                        setMarkFields(new_val);
                      }}
                      value={mark_fields[idx].mark_name}
                      error={mark_fields[idx].mark_name == ""}
                      disabled={calling}
                    />
                    <InputField
                      style={{ minWidth: "50px" }}
                      type="text"
                      placeholder="Total Mark"
                      handleChange={(e) => {
                        let new_val = [...mark_fields];
                        new_val[idx].total_mark = e.target.value;
                        let t_xm_mrk = mark_fields.reduce(
                          (cb, val) =>
                            (cb =
                              parseInt(cb) +
                              parseInt(
                                val.total_mark != "" ? val.total_mark : 0
                              )),
                          0
                        );
                        setTotalExamMark(t_xm_mrk);
                        setMarkFields(new_val);
                      }}
                      value={mark_fields[idx].total_mark}
                      error={mark_fields[idx].total_mark == ""}
                      disabled={calling}
                    />
                  </th>
                ))
              : null}
            <th className="text-center">
              <Button
                color="info"
                size="sm"
                onClick={() => {
                  setMarkFields([
                    ...mark_fields,
                    { mark_name: "", total_mark: "" },
                  ]);
                  let new_data = [...form_data];
                  new_data.map((el, idx) => {
                    el["marks"] = [
                      ...el["marks"],
                      {
                        title: "",
                        value: "0",
                      },
                    ];
                  });
                  setFormData(new_data);
                }}
                disabled={calling}
              >
                <i className="fas fa-plus" />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {student_list.length > 0
            ? student_list.map((el, idx) => (
                <tr key={idx}>
                  <td>{el["role"]}</td>
                  <td style={{ padding: "0.1rem" }}>
                    {el["student_identifier"]}
                  </td>
                  <td style={{ padding: "0.1rem" }}>{el["student_name"]}</td>
                  <td style={{ padding: "0.1rem" }}>
                    <InputField
                      type="checkbox"
                      checked={form_data[idx].subject_type}
                      handleChange={() => {
                        let new_data = [...form_data];
                        new_data[idx].subject_type = !new_data[idx]
                          .subject_type;
                        setFormData(new_data);
                      }}
                    />
                  </td>
                  <td style={{ padding: "0.1rem" }}>
                    <InputField
                      type="checkbox"
                      checked={form_data[idx].absent}
                      handleChange={() => {
                        let new_data = [...form_data];
                        new_data[idx].absent = !new_data[idx].absent;
                        setFormData(new_data);
                      }}
                    />
                  </td>

                  {mark_fields.map((element, index) => (
                    <td key={index} style={{ padding: "0.1rem" }}>
                      <InputField
                        style={{ minWidth: "80px" }}
                        type="text"
                        placeholder={mark_fields[index].mark_name}
                        handleChange={(e) => {
                          let new_data = [...form_data];
                          new_data[idx]["marks"][index].value = e.target.value;
                          new_data[idx].total_mark = new_data[idx][
                            "marks"
                          ].reduce(
                            (cb, val) =>
                              (cb =
                                parseInt(cb) +
                                parseInt(val.value != "" ? val.value : 0)),
                            0
                          );
                          setFormData(new_data);
                        }}
                        value={form_data[idx]["marks"][index].value}
                        error={form_data[idx]["marks"][index].value === ""}
                        disabled={calling}
                      />
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <div style={{ width: "100%", padding: "1.5rem", textAlign: "center" }}>
        <Button color="primary" type="submit" disabled={calling}>
          {calling ? <Spinner animation="border" variant="dark" /> : "Submit"}
        </Button>
      </div>
      <Alert
        color="success"
        isOpen={show}
        style={{ maxWidth: "250px", margin: "auto" }}
        fade={true}
      >
        Successfully Assigned Marks!
      </Alert>
      <Alert
        color="danger"
        isOpen={fail}
        style={{ maxWidth: "250px", margin: "auto" }}
        fade={true}
      >
        Failed To Assign Marks!
      </Alert>
    </Form>
  );
}
