import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import InputField from "components/controls/InputField";
import ManualAttendanceModel from "./ManualAttendanceModel";

export default function List(props) {
  const { list, list_head, loading, indexed = true, update, setupdate } = props;
  const [values, setValues] = useState([]);
  const [open, setOpen] = useState(false);
  const handleChange = (id) => {
    let new_val = [...values];
    const index = new_val.indexOf(id);
    if (index != -1) new_val.splice(index, 1);
    else new_val.push(id);
    setValues(new_val);
  };
  return (
    <>
      {values.length > 0 ? (
        <Button
          size="sm"
          className="m-3"
          style={{ maxWidth: "180px" }}
          onClick={() => setOpen(true)}
        >
          Mark Attendance
        </Button>
      ) : null}
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            <th> </th>
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
            list.map((element, index) => (
              <tr key={uuid()}>
                <td>
                  <InputField
                    type="checkbox"
                    placeholder=""
                    checked={values.indexOf(element.id) != -1}
                    handleChange={() => {
                      handleChange(element.id);
                    }}
                  />
                </td>
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "pre" }}>
                    {element[item.identifier]}
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
      {values.length > 0 ? (
        <ManualAttendanceModel
          open={open}
          setOpen={setOpen}
          values={values}
          update={update}
          setUpdate={setupdate}
          url="students/mark_attendance"
        />
      ) : null}
    </>
  );
}
