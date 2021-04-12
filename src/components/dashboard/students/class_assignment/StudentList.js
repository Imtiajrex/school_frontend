import React, { useContext, useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";

import Promote from "./Promote";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
export default function StudentList(props) {
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
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ student_id: "", student_name: "" });

  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [selected_class, setSelectedClass] = useState("");
  const [selected_session, setSelectedSession] = useState("");
  React.useEffect(() => {
    if (!open) setData({ student_id: "", student_name: "" });
  }, [open]);
  return (
    <>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            {indexed ? <th scope="col">#</th> : null}
            {list_head.map((item, index) => (
              <th key={uuid()}>{item.title}</th>
            ))}
            {remove ? <th scope="col">Delete</th> : null}
            {edit ? <th scope="col">Edit</th> : null}
            <th>Promote</th>
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
                <th>
                  <Button
                    color="success"
                    onClick={() => {
                      setData({
                        student_id: element.student_id,
                        student_name: element.student_name,
                      });
                      setOpen(true);
                    }}
                    size="sm"
                  >
                    Promote
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
      {data.student_name != "" ? (
        <Promote
          open={open}
          setOpen={setOpen}
          add_data={[
            {
              placeholder: "Session",
              type: "select",
              name: "session_id",
              options: session_list,
              setState: setSelectedSession,
              required: true,
            },
            {
              placeholder: "Class",
              type: "select",
              name: "class_id",
              options: class_list,
              setState: setSelectedClass,
              required: true,
            },
            {
              placeholder: "Department",
              type: "select",
              name: "department_id",
              options: department_list.filter(
                (element) =>
                  element.class_id == selected_class &&
                  element.session_id == selected_session
              ),
              required: true,
            },
            {
              placeholder: "Student Role",
              type: "number",
              name: "role",
              required: true,
            },
          ]}
          std_data={data}
          update={false}
          setUpdate={() => {}}
          title="Promote"
          url="/students/student_assignment"
          initial_values={{
            session_id: -1,
            class_id: -1,
            department_id: -1,
            role: "",
          }}
        />
      ) : null}
    </>
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
