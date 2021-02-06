import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";
import ReturnModal from "./ReturnModal";
import uuid from "react-uuid";
import IssuedBookDelete from "./IssuedBookDelete";

export default function IssuedList(props) {
  const {
    update,
    setupdate,
    list,
    list_head,
    loading,
    indexed = true,
    book_issuer_data,
  } = props;
  const [open, setOpen] = useState(false);
  const [del, setDelete] = useState(false);
  const [del_info, setDeleteInfo] = useState(false);
  const [book, setBook] = useState({});
  return (
    <>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            {indexed ? <th scope="col">#</th> : null}
            {list_head.map((item, index) => (
              <th key={uuid()}>{item.title}</th>
            ))}
            <th>Return</th>
            <th>Delete</th>
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
                {indexed ? (
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                ) : null}
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "pre" }}>
                    {element[item.identifier]}
                  </th>
                ))}
                <th>
                  <Button
                    size="sm"
                    onClick={() => {
                      setBook(element);
                      setOpen(true);
                    }}
                  >
                    Return
                  </Button>
                </th>
                <td>
                  <Button
                    color="danger"
                    onClick={() => {
                      setDelete(true);
                      setDeleteInfo(element.id);
                    }}
                  >
                    <i className="fas fa-trash" />
                  </Button>
                </td>
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
      {book != undefined && book != null ? (
        <ReturnModal
          update={update}
          setUpdate={setupdate}
          open={open}
          setopen={setOpen}
          book={book}
          book_issuer_data={book_issuer_data}
        />
      ) : null}
      <IssuedBookDelete
        open={del}
        setOpenDelete={setDelete}
        id={del_info}
        update={update}
        setUpdate={setupdate}
        url="library/issue_books"
      />
    </>
  );
}
