/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { FormGroup, InputGroupText } from "reactstrap";
import Input from "reactstrap/lib/Input";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";

export default function ResultExamInput(props) {
  const {
    name,
    placeholder,
    handleChange,
    invalid_msg = "",
    valid_msg = "",
    options = [],
    value = "[]",
    error,
  } = props;
  const [checked_value, setCheckedValue] = useState([]);
  const check = (id, percentage = 100, percentile = false) => {
    if (percentile) {
      let vals = [...checked_value];
      vals.map((val, index) => {
        if (val.exam_id == id) {
          val["exam_percentage"] = percentage;
        }
      });
      setCheckedValue(vals);
    } else {
      const index = checked_value.filter((val) => val.exam_id == id);
      if (index.length > 0) {
        let new_val = checked_value.filter((val) => val.exam_id != id);
        setCheckedValue(new_val);
      } else
        setCheckedValue([
          ...checked_value,
          { exam_id: id, exam_percentage: percentage },
        ]);
    }
  };

  React.useEffect(() => {
    console.log(checked_value);
    let event = {
      target: { value: checked_value, name: name },
    };
    handleChange(event);
  }, [checked_value]);

  React.useEffect(() => {
    setCheckedValue(value);
  }, []);

  return (
    <>
      <div className="text-dark">{placeholder}:</div>
      {options.map((element, index) => (
        <div
          className="bg-dark mb-3 p-3"
          style={{ borderRadius: 10 }}
          key={index}
        >
          <div>
            <div
              className="custom-control custom-checkbox mb-3 mr-3"
              key={index}
            >
              <input
                className="custom-control-input"
                id={index}
                type="checkbox"
                onChange={() => check(element.id, 100)}
                checked={
                  value.filter((val) => val.exam_id == element.id).length > 0
                }
              />
              <label
                className="custom-control-label text-white"
                htmlFor={index}
              >
                {element.name}
              </label>
            </div>
          </div>
          <div>
            <FormGroup>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i
                      className=" fas fa-percent"
                      style={{ fontSize: "9px" }}
                    />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="number"
                  name="percentage"
                  placeholder="Percentage (%)"
                  onChange={(e) => {
                    check(element.id, e.target.value, true);
                  }}
                  disabled={
                    value.filter((val) => val.exam_id == element.id).length == 0
                  }
                  value={
                    value.filter((val) => val.exam_id == element.id).length > 0
                      ? value.filter((val) => val.exam_id == element.id)[0][
                          "exam_percentage"
                        ]
                      : ""
                  }
                  max={100}
                  min={0}
                />
              </InputGroup>
            </FormGroup>
          </div>
        </div>
      ))}

      <small className="text-danger">{error ? invalid_msg : valid_msg}</small>
    </>
  );
}
