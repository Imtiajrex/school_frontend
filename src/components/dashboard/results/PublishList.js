import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";
import uuid from "react-uuid";
import InputField from "components/controls/InputField";
import PublishModal from "./PublishModal";

export default function PublishList(props) {
  const { list, list_head, loading, update, setupdate } = props;
  const [open, setopen] = useState(false);
  const [values, setvalues] = useState([]);
  const [all_value, setAll] = useState([]);

  const handleChange = (element) => {
    const index = values.indexOf(element.id);
    if (index != -1) {
      let new_val = [...values];
      new_val.splice(index, 1);
      setvalues(new_val);
    } else {
      setvalues([...values, element.id]);
    }
  };
  React.useEffect(() => {
    setvalues([]);
    let val = [];
    if (list.length > 0) list.map((element) => val.push(element.id));
    setAll(val);
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
            fontSize: "12px",
          }}
          onClick={() => {
            setopen(true);
          }}
        >
          Publish/Unpublish Result
        </Button>
      ) : null}
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <InputField
                type="checkbox"
                placeholder=""
                name="all"
                checked={all_value.sort() == values.sort()}
                handleChange={() => {
                  if (values == all_value) setvalues([]);
                  else setvalues(all_value);
                }}
              />
            </th>
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
                <th>
                  <InputField
                    key={index}
                    type="checkbox"
                    placeholder=""
                    name={index}
                    checked={values.indexOf(element.id) != -1}
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
        <PublishModal
          data={values}
          setopen={setopen}
          open={open}
          url="/results/result_publishing"
          setupdate={setupdate}
          update={update}
        />
      ) : null}
    </>
  );
}
