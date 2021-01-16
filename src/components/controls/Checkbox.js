import React from "react";
import FormFeedback from "reactstrap/lib/FormFeedback";

export default function Checkbox(props) {
  const {
    name,
    value,
    placeholder,
    handleChange,
    invalid_msg = "",
    valid_msg = "",
    error,
    ...other
  } = props;
  return (
    <>
      <input
        id={name}
        type="checkbox"
        name={name}
        value={value}
        onChange={handleChange}
        {...other}
      />
      <label htmlFor={name}>{placeholder}</label>

      <FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
    </>
  );
}
