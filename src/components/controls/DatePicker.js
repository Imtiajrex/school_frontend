import React from "react";
import ReactDatetime from "react-datetime";
import { FormGroup } from "reactstrap";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import InputGroupText from "reactstrap/lib/InputGroupText";

import "./datepicker.css";

const moment = require("moment");
export default function DatePicker(props) {
  const {
    name,
    value,
    placeholder,
    invalid_msg = "",
    valid_msg = "",
    handleChange,
    type = "date",
    error,
    required,
    disabled,
  } = props;

  let ref = React.createRef();
  const change = (e) => {
    if (e.toDate !== undefined) {
      const date = moment(e.toDate()).format("YYYY-MM-DD");
      let event = { target: {} };
      event["target"].value = date;
      event["target"].name = name;
      handleChange(event);
    } else {
      let event = { target: { value: null, name: name } };
      handleChange(event);
    }
  };
  return (
    <FormGroup className="datepicker">
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-calendar-grid-58" />
          </InputGroupText>
        </InputGroupAddon>
        <ReactDatetime
          closeOnSelect={true}
          ref={ref}
          inputProps={{
            placeholder: placeholder,
            required: required,
            disabled: disabled,
            value: value,
          }}
          timeFormat={type === "time"}
          dateFormat={type === "date"}
          onChange={change}
        />
      </InputGroup>
      <small className="text-danger">{error ? invalid_msg : valid_msg}</small>
    </FormGroup>
  );
}
