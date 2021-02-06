import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function BooksCrud() {
  const [categories, setCategories] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "library/books_category" })
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  const send_data = [
    {
      placeholder: "Book Name",
      type: "text",
      name: "book_name",
      required: true,
    },
    {
      placeholder: "Author Name",
      type: "text",
      name: "author_name",
      required: true,
    },
    {
      placeholder: "Category Name",
      type: "select",
      name: "category_name",
      options: categories,
      required: true,
    },
    {
      placeholder: "Shelf No",
      type: "text",
      name: "shelf_no",
      required: true,
    },
    {
      placeholder: "Price",
      type: "number",
      name: "price",
      required: true,
    },
    {
      placeholder: "Stock",
      type: "number",
      name: "stock",
      required: true,
    },
  ];
  return (
    <div>
      <Index
        title="Books List"
        list_url="/library/books"
        list_head={[
          { title: "Book Name", identifier: "book_name" },
          { title: "Author Name", identifier: "author_name" },
          { title: "Category Name", identifier: "category_name" },
          { title: "Shelf No", identifier: "shelf_no" },
          { title: "Price", identifier: "price" },
          { title: "Stock", identifier: "stock" },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          book_name: "",
          author_name: "",
          category_name: "",
          shelf_no: "",
          price: "",
          stock: "",
        }}
      />
    </div>
  );
}
