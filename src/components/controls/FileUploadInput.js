import React, { useState } from "react";
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
    multiple = false,
    ...other
  } = props;
  const [images, setImages] = useState([]);
  const showFile = (e) => {
    let new_img = [];
    if (e.target.files.length > 0)
      Array.from(e.target.files).map((el) =>
        new_img.push(URL.createObjectURL(el))
      );
    setImages(new_img);
  };
  React.useEffect(() => {
    if (value.length == 0) setImages([]);
  }, [value]);
  return (
    <FormGroup>
      <small className="text-muted">{placeholder}</small>
      <div className="d-flex space-between flex-wrap">
        {images.length > 0
          ? images.map((el, idx) => (
              <img
                src={el}
                width="50"
                height={50}
                alt="img"
                key={idx}
                style={{ objectFit: "cover", margin: "0.2rem" }}
              />
            ))
          : null}
      </div>
      <Input
        type="file"
        id="exampleFile"
        name={name}
        accept="image/*"
        onChange={(e) => {
          if (multiple) {
            handleChange({ target: { name, value: e.target.files } });
          } else {
            handleChange({ target: { name, value: e.target.files[0] } });
          }
          showFile(e);
        }}
        multiple={multiple}
        {...other}
      />
      <small className="text-danger">{error ? invalid_msg : valid_msg}</small>
    </FormGroup>
  );
}
