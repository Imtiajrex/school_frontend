import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";
import Index from "components/crud/Index";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import CustomBookList from "./CustomBookList";
import IssuedList from "./IssuedList";

export default function Books(props) {
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
                Student ID: {student_info.student_id}
              </Button>
            </div>
          </div>
          {query_tags.length > 0 ? (
            <>
              <Index
                title="Issued Books List"
                list_url={`/library/issue_books?book_issued_to_id=${student_info.id}`}
                CustomListComponent={IssuedList}
                list_head={[
                  {
                    title: "Book",
                    identifier: "book_name",
                  },
                  {
                    title: "Issued Date",
                    identifier: "book_issued_date",
                  },
                  {
                    title: "To Return Date",
                    identifier: "book_return_date",
                  },
                  {
                    title: "To Return Date",
                    identifier: "book_return_date",
                  },
                  {
                    title: "Status",
                    identifier: "issue_status",
                  },
                ]}
                book_issuer_data={{
                  book_issuer_type: "student",
                  book_issued_to_id: student_info.student_id,
                  book_issued_to_name: student_info.student_name,
                }}
              />
              <Index
                title="Books List"
                list_url="/library/books?all=true"
                CustomListComponent={CustomBookList}
                list_head={[
                  {
                    title: "Book",
                    identifier: "book_name",
                  },
                  {
                    title: "Category",
                    identifier: "category_name",
                  },
                  {
                    title: "Author",
                    identifier: "author_name",
                  },
                  {
                    title: "Shelf",
                    identifier: "shelf_no",
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
                book_issuer_data={{
                  book_issuer_type: "student",
                  book_issued_to_id: student_info.student_id,
                  book_issued_to_name: student_info.student_name,
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
