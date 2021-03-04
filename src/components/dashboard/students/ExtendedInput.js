import InputField from "components/controls/InputField";
import React, { useState } from "react";
import Collapse from "reactstrap/lib/Collapse";

export default function ExtendedInput(props) {
  const {
    title,
    children = [],
    disabled,
    value = [],
    handleChange,
    name,
  } = props;

  const [open, setopen] = useState(false);
  const [val, setVal] = useState({});

  const handleOpen = () => setopen(!open);

  React.useEffect(() => {
    setVal(JSON.parse(value));
  }, [value]);

  const handleInputChange = (e) => {
    let extended_value = JSON.parse(value);
    extended_value[e.target.name] = e.target.value;
    const send_value = {
      target: { name: name, value: JSON.stringify(extended_value) },
    };

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
                value={val[element.name]}
                disabled={disabled}
                options={element.options}
              />
            ))
          : null}
      </Collapse>
    </div>
  );
}
