import React from "react";
import { FormGroup, Input } from "reactstrap";
import FormFeedback from "reactstrap/lib/FormFeedback";
import Label from "reactstrap/lib/Label";

export default function TextInput(props) {
  const {
    name,
    value,
    placeholder,
    invalid_msg = "",
    valid_msg = "",
    handleChange,
    error,
    ...other
  } = props;
  return (
    <FormGroup>
      <small className="text-muted">{placeholder}</small>
      <Input
        type="file"
        name="file"
        id="exampleFile"
        accept="image/*"
        {...other}
      />
      <FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
    </FormGroup>
  );
}
