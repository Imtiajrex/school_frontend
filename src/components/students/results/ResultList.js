import React from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";

export default function List(props) {
  const { list, list_head, edit = false, remove = false, loading } = props;
  return (
    <Table className="align-items-center table-dark table-flush" responsive>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          {list_head.map((item, index) => (
            <th key={uuid()}>{item.title}</th>
          ))}
          {remove ? <th scope="col">Delete</th> : null}
          {edit ? <th scope="col">Edit</th> : null}
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
                <th key={uuid()} style={{ whiteSpace: "pre" }}>
                  {element[item.identifier]}
                </th>
              ))}
              <th>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "/print/results/result_card?result_id=" +
                        element.id +
                        "&student_identifier=" +
                        element.student_id,
                      "Print Result",
                      "height=600,width=1000"
                    );
                    return false;
                  }}
                >
                  Result Check
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
  );
}
