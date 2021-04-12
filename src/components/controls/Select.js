/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { FormGroup, FormFeedback, Input } from "reactstrap";

export default function Select(props) {
  const {
    name,
    value,
    placeholder,
    invalid_msg = "",
    valid_msg = "",
    handleChange,
    options = [],
    error,
    setState,
    ...other
  } = props;
  React.useEffect(() => {
    if (typeof setState === "function") setState(value);
  }, []);
  React.useEffect(() => {
    if (typeof setState === "function") setState(value);
  }, [value]);
  return (
    <FormGroup>
      <Input
        type="select"
        name={name}
        id="select"
        onChange={(e) => {
          if (typeof setState === "function") setState(e.target.value);
          handleChange(e);
        }}
        invalid={error}
        valid={!error}
        value={value}
        {...other}
      >
        <option value="-1">{placeholder}</option>
        {options.map((element, index) => (
          <option key={index} value={element.value}>
            {element.text}
          </option>
        ))}
      </Input>
      <FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
    </FormGroup>
  );
}
