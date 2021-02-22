import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function FindBooks({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const [categories, setCategories] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "library/books_category" })
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Index
        title="Books List"
        list_url="/library/books"
        list_head={[
          {
            title: "Book",
            identifier: "book_name",
          },
          {
            title: "Book Category",
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
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        query_title="Query Exam Subject List"
        query_list={[
          {
            placeholder: "Book Name",
            type: "text",
            name: "book_name",
            required: false,
          },
          {
            placeholder: "Book Category",
            type: "select",
            name: "category_name",
            options: categories,
            required: false,
          },
          {
            placeholder: "Author Name",
            type: "text",
            name: "author_name",
            required: false,
          },
        ]}
        query_data={{
          book_name: "",
          category_name: -1,
          author_name: "",
        }}
      />
    </div>
  );
}
