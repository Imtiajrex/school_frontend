import InputField from "components/controls/InputField";
import React, { useState } from "react";
import Collapse from "reactstrap/lib/Collapse";

export default function ExtendedInput(props) {
  const {
    title,
    children = [],
    disabled,
    this_value = [],
    handleChange,
    this_name,
  } = props;

  const [open, setopen] = useState(false);
  const handleOpen = () => setopen(!open);

  const handleInputChange = (e) => {
    let extended_value = this_value;
    const { name, value } = e.target;
    extended_value[name] = value;
    const send_value = { target: { name: this_name, value: extended_value } };

    handleChange(send_value);
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>{title}</div>
        <i
          className="ni ni-bold-down"
          style={{
            transition: "0.3s",
            transform: `rotateX(${open ? `180deg` : `0deg`})`,
          }}
        />
      </div>
      <Collapse isOpen={open}>
        {children.length > 0
          ? children.map((element, index) => (
              <InputField
                key={index}
                type={element.type}
                placeholder={element.placeholder}
                name={element.name}
                handleChange={handleInputChange}
                value={this_value[element.name]}
                disabled={disabled}
                options={element.options}
              />
            ))
          : null}
      </Collapse>
    </div>
  );
}
