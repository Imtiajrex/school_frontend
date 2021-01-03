import Index from "components/crud/Index";
import React from "react";

export default function ProductCrud() {
  const send_data = [
    {
      placeholder: "Product Name",
      type: "text",
      name: "product_name",
      required: true,
    },
    {
      placeholder: "Product Info",
      type: "text",
      name: "product_info",
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
        title="Products List"
        list_url="/products/product"
        list_head={[
          { title: "Product Name", identifier: "product_name" },
          { title: "Product Info", identifier: "product_info" },
          { title: "Price", identifier: "price" },
          { title: "Stock", identifier: "stock" },
        ]}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={send_data}
        add_initial_values={{
          product_name: "",
          product_info: "",
          price: "",
          stock: "",
        }}
      />
    </div>
  );
}
