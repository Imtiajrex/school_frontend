import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";
import uuid from "react-uuid";
import InputField from "components/controls/InputField";
import DuePaymentModal from "./PaymentRequestModal";

export default function DuePaymentList(props) {
  const {
    list,
    list_head,
    loading,
    update,
    setupdate,
    remove,
    edit,
    setOpenEdit,
    setOpenDelete,
    setDeleteInfo,
    setEditInfo,
  } = props;
  const [open, setopen] = useState(false);
  const [values, setvalues] = useState([]);

  const [query_data, setQueryData] = useState({});
  const handleChange = (element) => {
    if (values.filter((val) => val.id == element.id).length > 0) {
      const new_val = values.filter((val) => val.id != element.id);
      setvalues(new_val);
    } else {
      setvalues([
        ...values,
        {
          id: element.id,
          payment_id: element.payment_id,
          payment_category: "Due: " + element.payment_category,
          payment_info: element.payment_info,
          payment_amount: element.amount,
          paid_amount: "",
        },
      ]);
    }
    setQueryData({
      student_identifier: element.student_identifier,
      student_id: element.student_id,
      student_name: element.student_name,
      session_id: element.session_id,
      session: element.session,
    });
  };
  React.useEffect(() => {
    setQueryData({});
    setvalues([]);
  }, [loading]);
  return (
    <>
      {list.length > 0 && values.length > 0 ? (
        <Button
          color="warning"
          style={{
            maxWidth: "200px",
            marginLeft: "1.5rem",
            marginBottom: "1.5rem",
          }}
          onClick={() => {
            setopen(true);
            console.log(values);
          }}
        >
          Pay Due
        </Button>
      ) : null}
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
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
                <th>
                  <InputField
                    key={index}
                    type="checkbox"
                    placeholder=""
                    name={index}
                    checked={
                      values.filter((val) => val.id == element.id).length > 0
                    }
                    handleChange={() => {
                      handleChange(element);
                    }}
                  />
                </th>
                <th scope="row">{index + 1}</th>
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "normal" }}>
                    {element[item.identifier]}
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
      {list.length > 0 ? (
        <DuePaymentModal
          data={values}
          setPaymentModal={setopen}
          open={open}
          query_data={query_data}
          url="/payments/student_due/pay"
          setupdate={setupdate}
          update={update}
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
