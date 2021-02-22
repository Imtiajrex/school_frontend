import React from "react";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";
import uuid from "react-uuid";

export default function DuePaymentList(props) {
  const { list, list_head, loading } = props;
  return (
    <>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
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
                <th scope="row">{index + 1}</th>
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "normal" }}>
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
    </>
  );
}
