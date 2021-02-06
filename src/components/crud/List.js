import React from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";

export default function List(props) {
  const {
    setOpenEdit,
    setOpenDelete,
    setDeleteInfo,
    setEditInfo,
    list,
    list_head,
    edit = false,
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
              {indexed ? (
                <th scope="row" key={index}>
                  {index + 1}
                </th>
              ) : null}
              {list_head.map((item, index) => (
                <th key={uuid()} style={{ whiteSpace: "pre" }}>
                  {item.type != "image" ? (
                    element[item.identifier]
                  ) : (
                    <img
                      src={
                        process.env.REACT_APP_IMAGE_PATH +
                        "/" +
                        element[item.identifier]
                      }
                      alt="Gallery IMG"
                      style={{ width: "80px", objectFit: "cover" }}
                    />
                  )}
                </th>
              ))}

              <DeleteButton
                remove={remove}
                id={element.id}
                setOpenDelete={setOpenDelete}
                setDeleteInfo={setDeleteInfo}
              />
              <EditButton
                edit={edit}
                element={element}
                setOpenEdit={setOpenEdit}
                setEditInfo={setEditInfo}
              />
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
function DeleteButton({ id, remove, setOpenDelete, setDeleteInfo }) {
  return remove ? (
    <td>
      <Button
        color="danger"
        onClick={() => {
          setOpenDelete(true);
          setDeleteInfo(id);
        }}
      >
        <i className="fas fa-trash" />
      </Button>
    </td>
  ) : null;
}

function EditButton({ element, edit, setOpenEdit, setEditInfo }) {
  const change = () => {
    setEditInfo(element);
  };
  return edit ? (
    <td>
      <Button color="primary" onClick={change}>
        <i className="fas fa-pencil-alt" />
      </Button>
    </td>
  ) : null;
}
