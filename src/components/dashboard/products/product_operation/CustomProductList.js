import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import InputField from "components/controls/InputField";
import SellModal from "./SellModal";

export default function CustomProductList(props) {
  const {
    update,
    setupdate,
    list,
    list_head,
    loading,
    indexed = true,
    product_issuer_data,
  } = props;
  const [values, setvalues] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [val_to_show, setValToShow] = React.useState([]);
  const [issue, setIssue] = useState(false);
  const [sell, setSell] = useState(false);
  const handleChange = (id, product_name, prc) => {
    let new_val = [...values];
    const index = new_val.indexOf(id);
    let new_val_to_show = [...val_to_show];
    let new_price = [...price];
    if (index != -1) {
      new_val.splice(index, 1);
      new_val_to_show.splice(index, 1);
      new_price.splice(index, 1);
    } else {
      new_val.push(id);
      new_val_to_show.push(id + ". " + product_name);
      new_price.push(prc);
    }
    setvalues(new_val);
    setPrice(new_price);
    setValToShow(new_val_to_show);
  };
  return (
    <>
      <div className="mb-3 ml-3">
        <p className="text-white">Selected Products: </p>
        <div className="d-flex space-between flex-wrap">
          {val_to_show.length > 0
            ? val_to_show.map((element, index) => (
                <Button
                  key={index}
                  color="success"
                  size="sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "1rem",
                  }}
                >
                  {element}
                </Button>
              ))
            : null}
        </div>
      </div>
      <div className="d-flex">
        {list.length > 0 && values.length > 0 ? (
          <Button
            color="info"
            style={{
              maxWidth: "200px",
              marginLeft: "1.5rem",
              marginBottom: "1.5rem",
              float: "left",
            }}
            onClick={() => {
              setSell(true);
            }}
          >
            Sell Product
          </Button>
        ) : null}
      </div>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            <th> </th>
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
                <td>
                  <InputField
                    type="checkbox"
                    placeholder=""
                    checked={
                      values.filter((val) => val == element.id).length > 0
                    }
                    handleChange={() => {
                      handleChange(
                        element.id,
                        element.product_name,
                        element.price
                      );
                    }}
                  />
                </td>
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "pre" }}>
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
      <SellModal
        open={sell}
        setopen={setSell}
        products_ids={values}
        products_show={val_to_show}
        product_issuer_data={product_issuer_data}
        price={price}
        update={update}
        setUpdate={setupdate}
      />
    </>
  );
}
