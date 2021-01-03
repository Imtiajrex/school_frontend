import React from "react";
import FormFeedback from "reactstrap/lib/FormFeedback";

export default function CheckBoxArr(props) {
  const {
    name,
    value,
    placeholder,
    handleChange,
    invalid_msg = "",
    valid_msg = "",
    options = [],
    error,
    ...other
  } = props;
  const checked_value = [];
  const check = (id) => {
    const index = checked_value.indexOf(id);
    if (index !== -1) checked_value.splice(index, 1);
    else checked_value.push(id);

    let event = { target: { value: checked_value, name: name } };
    handleChange(event);
  };
  return (
    <>
      <div className="text-dark">{placeholder}:</div>
      {options.map((element, index) => (
        <div className="custom-control custom-checkbox mb-3" key={index}>
          <input
            className="custom-control-input"
            id={index}
            type="checkbox"
            onChange={() => check(element.id)}
            {...other}
          />
          <label className="custom-control-label" htmlFor={index}>
            {element.name}
          </label>
        </div>
      ))}

      <FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
    </>
  );
}
