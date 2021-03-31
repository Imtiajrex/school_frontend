/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

export default function CheckBoxArr(props) {
  const {
    name,
    placeholder,
    handleChange,
    invalid_msg = "",
    valid_msg = "",
    options = [],
    value = {},
    error,
  } = props;
  const [checked_value, setCheckedValue] = useState([]);
  const check = (id) => {
    const index = checked_value.indexOf(id);
    if (index !== -1) {
      let new_val = [...checked_value];
      new_val.splice(index, 1);
      setCheckedValue(new_val);
    } else setCheckedValue([...checked_value, id]);
  };
  React.useEffect(() => {
    let event = {
      target: { value: JSON.stringify(checked_value), name: name },
    };
    handleChange(event);
  }, [checked_value]);
  React.useEffect(() => {
    setCheckedValue(JSON.parse(value));
  }, []);
  React.useEffect(() => {
    if (
      Object.keys(checked_value).length > 0 &&
      Object.keys(JSON.parse(value)).length == 0
    )
      setCheckedValue(value);
  }, [value]);
  return (
    <>
      <div className="text-dark">{placeholder}:</div>
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {options.map((element, index) => (
          <div className="custom-control custom-checkbox mb-3 mr-3" key={index}>
            <input
              className="custom-control-input"
              id={index}
              type="checkbox"
              onChange={() => check(element.id)}
              checked={JSON.parse(value).indexOf(element.id) !== -1}
            />
            <label className="custom-control-label" htmlFor={index}>
              {element.name}
            </label>
          </div>
        ))}
      </div>

      <small className="text-danger">{error ? invalid_msg : valid_msg}</small>
    </>
  );
}
