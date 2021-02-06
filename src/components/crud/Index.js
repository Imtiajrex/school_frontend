import React, { useState } from "react";

import { Card, CardHeader, Container, Row } from "reactstrap";
import Button from "reactstrap/lib/Button";
import CardBody from "reactstrap/lib/CardBody";
import { Call } from "services/API/Call";
import Add from "./Add";
import Delete from "./Delete";
import Edit from "./Edit";
import List from "./List";
import Query from "./Query";

function Index(props) {
  const {
    title,
    add_data = [],
    add_initial_values = [],
    CustomListComponent = undefined,
    custom_list = undefined,
    custom_update = undefined,
    setCustomUpdate = undefined,
    query_list = undefined,
    custom_loading = undefined,
    modal_size = "sm",
    list_url,
    list_head,
    add = false,
    edit = false,
    remove = false,
    edit_data = [],
    query_title,
    query_data,
    indexed = true,
    file = false,
    ...other
  } = props;
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [list, setList] = useState([]);
  const [deleteInfo, setDeleteInfo] = useState("");
  const [editInfo, setEditInfo] = useState({});
  const [update, setUpdate] = useState(true);
  const [loading, setloading] = useState(false);
  const [query, setquery] = useState("");
  const [query_tags, setQueryTags] = useState([]);
  const [querying, setQuerying] = useState(false);

  React.useEffect(() => {
    if (custom_list === undefined) {
      if (typeof query_list == "object") {
        if (query.length > 0) {
          setloading(true);
          setQuerying(true);
          Call({
            method: "get",
            url: list_url + query,
          })
            .then((res) => {
              setList(res);
              setQuerying(false);
              setloading(false);
            })
            .catch((error) => {
              setQuerying(false);
              setloading(false);
            });
        }
      } else {
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
            setQuerying(false);
            setloading(false);
          });
      }
    } else {
      if (setCustomUpdate !== undefined) setCustomUpdate(!custom_update);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update, list_url]);
  React.useEffect(() => {
    if (Object.keys(editInfo).length > 0) setOpenEdit(true);
    else setOpenEdit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editInfo]);
  return (
    <>
      <Container fluid>
        {query_list != null && query_list.length > 0 ? (
          <Row className="mt-5 mb-5">
            <div className="col">
              <Card
                className="bg-default shadow"
                style={{ maxWidth: "450px", margin: "auto" }}
              >
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">{query_title}</h3>
                </CardHeader>
                <CardBody>
                  <Query
                    query_list={query_list}
                    initial_values={query_data}
                    query={query}
                    setquery={setquery}
                    update={update}
                    setUpdate={setUpdate}
                    setQueryTags={setQueryTags}
                    querying={querying}
                  />
                </CardBody>
              </Card>
            </div>
          </Row>
        ) : null}

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
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1rem",
                  }}
                >
                  {query_tags.length > 0
                    ? query_tags.map((element, index) => (
                        <Button
                          key={index}
                          color="success"
                          size="sm"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            maxWidth: "250px",
                            marginRight: "1rem",
                          }}
                        >
                          {element.title} : {element.value}
                        </Button>
                      ))
                    : null}
                </div>
              </CardHeader>
              {CustomListComponent == undefined ? (
                <List
                  setOpenDelete={setOpenDelete}
                  setOpenEdit={setOpenEdit}
                  setDeleteInfo={setDeleteInfo}
                  setEditInfo={setEditInfo}
                  list={custom_list === undefined ? list : custom_list}
                  list_head={list_head}
                  edit={edit}
                  remove={remove}
                  loading={
                    custom_loading !== undefined ? custom_loading : loading
                  }
                  indexed={indexed}
                  {...other}
                />
              ) : (
                <CustomListComponent
                  list={list}
                  list_head={list_head}
                  query_tags={query_tags}
                  loading={loading}
                  url={list_url}
                  setOpenDelete={setOpenDelete}
                  setOpenEdit={setOpenEdit}
                  setDeleteInfo={setDeleteInfo}
                  setEditInfo={setEditInfo}
                  update={update}
                  setupdate={setUpdate}
                  edit={edit}
                  remove={remove}
                  indexed={indexed}
                  {...other}
                />
              )}
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
            file={file}
            setEditInfo={setEditInfo}
            modal_size={modal_size}
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
            modal_size={modal_size}
            file={file}
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
