import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";

export default function PaymentReceiptList(props) {
  const {
    setOpenDelete,
    setDeleteInfo,
    list,
    list_head,
    remove = false,
    loading,
    indexed = true,
  } = props;
  return (
    <Table className="align-items-center table-dark table-flush" responsive>
      <thead className="thead-dark">
        <tr>
          {indexed ? <th scope="col">#</th> : null}
          {list_head.map((item, index) => (
            <th key={uuid()}>{item.title}</th>
          ))}
          <th>Receipt</th>
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
              {indexed ? <th scope="row">{index + 1}</th> : null}
              {list_head.map((item, index) => (
                <th key={uuid()} style={{ whiteSpace: "pre" }}>
                  {element[item.identifier]}
                </th>
              ))}

              {console.log(element.id)}
              {index == 0 || list[index - 1].id != element.id ? (
                <td rowSpan={list.filter((val) => val.id == element.id).length}>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "/admin/print/receipt/" + element.id,
                        "Print Receipt",
                        "height=600,width=800"
                      );
                      return false;
                    }}
                  >
                    Receipt No: {element.id} <i className="fas fa-directions" />
                  </Button>
                </td>
              ) : null}
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
