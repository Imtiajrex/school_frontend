import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import AddStudentPayment from "./AddStudentPayment";

export default function StudentPaymentList(props) {
  const { list, list_head, loading } = props;
  const [data, setData] = useState({});
  const [open, setopen] = useState(false);
  return (
    <>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            {list_head.map((item, index) => (
              <th key={uuid()}>{item.title}</th>
            ))}
            <th>Payment</th>
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
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "normal" }}>
                    {element[item.identifier]}
                  </th>
                ))}

                <th>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => {
                      setopen(true);
                      setData({
                        student_id: element.student_id,
                        student_identifier: element.student_identifier,
                        session_id: element.session_id,
                        session: element.session,
                        student_name: element.student_name,
                      });
                    }}
                  >
                    Payment
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
      {list.length > 0 ? (
        <AddStudentPayment
          data={data}
          setPaymentModal={setopen}
          open={open}
          url="/payments/student_payment"
        />
      ) : null}
    </>
  );
}
