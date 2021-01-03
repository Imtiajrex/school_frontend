import React from "react";
import { FormGroup, Input } from "reactstrap";
import Col from "reactstrap/lib/Col";
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
    <FormGroup row className="d-flex align-items-center">
      <Label for="exampleFile" sm={2}>
        {placeholder}
      </Label>
      <Col sm={10}>
        <Input
          type="file"
          name="file"
          id="exampleFile"
          accept="image/*"
          {...other}
        />
      </Col>

      <FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
    </FormGroup>
  );
}
