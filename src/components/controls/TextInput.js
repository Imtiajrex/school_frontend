import React from "react";
import { FormGroup, FormFeedback, Input } from "reactstrap";

export default function TextInput(props) {
  const {
    name,
    value,
    placeholder,
    invalid_msg = "",
    valid_msg = "",
    handleChange,
    type = "text",
    error,
    ...other
  } = props;
  return (
    <FormGroup>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        invalid={error}
        valid={!error}
        row="5"
        {...other}
      />
      <FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
    </FormGroup>
  );
}
