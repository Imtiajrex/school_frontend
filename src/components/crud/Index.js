import React, { useState } from "react";

import { Card, CardHeader, Container, Row } from "reactstrap";
import Button from "reactstrap/lib/Button";
import { Call } from "services/API/Call";
import Add from "./Add";
import Delete from "./Delete";
import Edit from "./Edit";
import List from "./List";

function Index(props) {
  const {
    title,
    add_data = [],
    add_initial_values = [],
    list_url,
    list_head,
    add = false,
    edit = false,
    remove = false,
    edit_data = [],
  } = props;
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [list, setList] = useState({});
  const [deleteInfo, setDeleteInfo] = useState("");
  const [editInfo, setEditInfo] = useState({});
  const [update, setUpdate] = useState(true);
  const [loading, setloading] = useState(false);

  React.useEffect(() => {
    setloading(true);
    Call({
      method: "get",
      url: list_url,
    })
      .then((res) => {
        setList(res);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);
  React.useEffect(() => {
    if (Object.keys(editInfo).length > 0) setOpenEdit(true);
    else setOpenEdit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editInfo]);
  return (
    <>
      <Container fluid>
        <Row className="mt-5 mb-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">{title}</h3>
                {add ? (
                  <Button
                    color="primary"
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => setOpenAdd(!openAdd)}
                  >
                    Add New Record
                    <i
                      className="ni ni-fat-add"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </Button>
                ) : null}
              </CardHeader>
              <List
                setOpenDelete={setOpenDelete}
                setOpenEdit={setOpenEdit}
                setDeleteInfo={setDeleteInfo}
                setEditInfo={setEditInfo}
                list={list}
                list_head={list_head}
                edit={edit}
                remove={remove}
                loading={loading}
              />
            </Card>
          </div>
        </Row>
        {edit && Object.keys(editInfo).length > 0 ? (
          <Edit
            open={openEdit}
            setOpenEdit={setOpenEdit}
            edit_values={editInfo}
            update={update}
            setUpdate={setUpdate}
            edit_data={edit_data}
            url={list_url}
            setEditInfo={setEditInfo}
          />
        ) : null}
        {add ? (
          <Add
            url={list_url}
            open={openAdd}
            setOpenAdd={setOpenAdd}
            add_data={add_data}
            initial_values={add_initial_values}
            update={update}
            setUpdate={setUpdate}
          />
        ) : null}

        {remove ? (
          <Delete
            open={openDelete}
            setOpenDelete={setOpenDelete}
            id={deleteInfo}
            update={update}
            setUpdate={setUpdate}
            url={list_url}
          />
        ) : null}
      </Container>
    </>
  );
}

export default Index;
