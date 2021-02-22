import React from "react";
import {
  TextInput,
  FileUploadInput,
  Select,
  CheckBoxArr,
  Checkbox,
} from "./Controls";
import DatePicker from "./DatePicker";
export default function InputField(props) {
  const {
    type,
    name,
    placeholder,
    handleChange,
    value,
    options = [],
    error,
    disabled,
    setState = null,
    multiple = false,
    ...other
  } = props;
  if (["text", "number", "password", "email", "textarea"].includes(type))
    return (
      <TextInput
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        invalid_msg={`Enter Valid ${placeholder}!`}
        value={value}
        error={error}
        disabled={disabled}
        {...other}
      />
    );
  else if (["file"].includes(type))
    return (
      <FileUploadInput
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        invalid_msg={`Upload Valid ${placeholder}!`}
        value={value}
        error={error}
        disabled={disabled}
        multiple={multiple}
        {...other}
      />
    );
  else if (["date"].includes(type))
    return (
      <DatePicker
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        invalid_msg={`Select Valid ${placeholder}!`}
        value={value}
        error={error}
        disabled={disabled}
        {...other}
      />
    );
  else if (["select"].includes(type))
    return (
      <Select
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        invalid_msg={`Select Valid ${placeholder}!`}
        value={value}
        options={options}
        error={error}
        disabled={disabled}
        setState={setState}
        {...other}
      />
    );
  else if (["checkboxarr"].includes(type))
    return (
      <CheckBoxArr
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        invalid_msg={`Choose Valid ${placeholder}!`}
        value={value}
        error={error}
        options={options}
        disabled={disabled}
        {...other}
      />
    );
  else if (["checkbox"].includes(type))
    return (
      <Checkbox
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        invalid_msg={`Choose Valid ${placeholder}!`}
        value={value}
        error={error}
        disabled={disabled}
        {...other}
      />
    );
  else if (["time"].includes(type))
    return (
      <TextInput
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type="time"
        handleChange={handleChange}
        invalid_msg={`Enter Valid ${placeholder}!`}
        value={value}
        error={error}
        disabled={disabled}
        {...other}
      />
    );
  else
    return (
      <TextInput
        className="mt-3"
        name={name}
        placeholder={placeholder}
        type="text"
        handleChange={handleChange}
        invalid_msg={`Enter Valid ${placeholder}!`}
        value={value}
        error={error}
        disabled={disabled}
        {...other}
      />
    );
}
