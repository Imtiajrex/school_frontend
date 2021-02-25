import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";
import Index from "components/crud/Index";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import CustomProductList from "./CustomProductList";

export default function Products(props) {
  const { update, loading, indexed = true, query_tags } = props;
  const [student_info, setStudentInfo] = useState({});
  React.useEffect(() => {
    if (query_tags.length > 0) {
      console.log(query_tags);
      let id = query_tags.filter(
        (el) => el.title == "Student ID" || el.title == "Student"
      )[0].value;
      id = id.split(" ");
      id = id[0];
      Call({ method: "get", url: "students/student?student_id=" + id })
        .then((res) => {
          if (res.length > 0) setStudentInfo(res[0]);
          else setStudentInfo({});
        })
        .catch((err) => console.log(err));
    }
  }, [query_tags, update]);
  return (
    <>
      {Object.values(student_info).length > 0 ? (
        <>
          <div className="mb-3 ml-3">
            <p className="text-white">User Info: </p>
            <div className="d-flex space-between flex-wrap">
              <Button
                color="warning"
                size="sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "1rem",
                }}
              >
                Student Name: {student_info.student_name}
              </Button>
              <Button
                color="warning"
                size="sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "1rem",
                }}
              >
                Student ID: {student_info.student_identifier}
              </Button>
            </div>
          </div>
          {query_tags.length > 0 ? (
            <>
              <Index
                title="Products List"
                list_url="/products/product?all=true"
                CustomListComponent={CustomProductList}
                list_head={[
                  {
                    title: "Product",
                    identifier: "product_name",
                  },
                  {
                    title: "Info",
                    identifier: "product_info",
                  },
                  {
                    title: "Price",
                    identifier: "price",
                  },
                  {
                    title: "Stock",
                    identifier: "stock",
                  },
                ]}
                product_issuer_data={{
                  product_issuer_type: "student",
                  product_issued_to_id: student_info.student_id,
                  product_issued_to_name: student_info.student_name,
                }}
              />
            </>
          ) : (
            <div className="w-100 text-center">
              <Spinner color="white" />
            </div>
          )}
        </>
      ) : null}
    </>
  );
}
