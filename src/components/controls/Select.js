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
    options = [],
    error,
    ...other
  } = props;
  return (
    <FormGroup>
      <Input
        type="select"
        name={name}
        id="select"
        onChange={handleChange}
        invalid={error}
        valid={!error}
        {...other}
      >
        <option value="-1">{placeholder}</option>
        {options.map((element, index) => (
          <option value={element.value}>{element.text}</option>
        ))}
      </Input>
      <FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
    </FormGroup>
  );
}
