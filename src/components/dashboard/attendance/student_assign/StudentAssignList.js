import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import StudentAssignModal from "./StudentAssignModal";

export default function StudentAssignList(props) {
  const { list, list_head, loading } = props;

  const [open, setopen] = useState(false);
  const [initial_values, setInitialValues] = useState({ id: "", card: "" });
  const add_data = [
    {
      placeholder: "Student ID",
      type: "text",
      name: "id",
      required: true,
      disabled: true,
    },
    {
      placeholder: "Card",
      type: "text",
      name: "card",
      required: true,
    },
  ];
  const setAssignment = (student_id) => {
    setInitialValues({ id: student_id, card: "" });
    setopen(true);
  };
  React.useEffect(() => {
    if (!open) setInitialValues({ id: "", card: "" });
  }, [open]);
  return (
    <>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            {list_head.map((item, index) => (
              <th key={uuid()}>{item.title}</th>
            ))}
            <th>Assign</th>
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
            list.map((element, index) => (
              <tr key={uuid()}>
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "pre" }}>
                    {element[item.identifier]}
                  </th>
                ))}
                <th>
                  <Button
                    onClick={() => setAssignment(element.student_identifier)}
                  >
                    Assign Card
                  </Button>
                </th>
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
      {initial_values.id != "" ? (
        <StudentAssignModal
          open={open}
          setOpen={setopen}
          add_data={add_data}
          initial_values={initial_values}
          title="Student Card Assignment"
          url="attendance/assign_card"
        />
      ) : null}
    </>
  );
}
