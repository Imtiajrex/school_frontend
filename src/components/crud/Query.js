import InputField from "components/controls/InputField";
import { useForm } from "components/useForm";
import React, { useState } from "react";
import { Form } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import { ValidateInput } from "./ValidateInput";

export default function Query(props) {
  const {
    query,
    setquery,
    query_list,
    initial_values,
    update,
    setUpdate,
    setQueryTags,
  } = props;
  const [calling, setCalling] = useState(false);
  const { values, handleInputChange, errors, setErrors, resetForm } = useForm(
    initial_values
  );

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // eslint-disable-next-line array-callback-return
    Object.values(query_list).map((element, index) => {
      if (!element.required) {
        temp[element.name] = false;
      } else if (element.name in fieldValues) {
        temp[element.name] = ValidateInput(element, fieldValues);
      }
    });

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      // eslint-disable-next-line eqeqeq
      return Object.values(temp).every((x) => x == false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCalling(true);
    if (validate()) {
      let query_to_set = "?";
      let query_tag_to_set = [];
      query_list.map((element, index) => {
        if (values[element.name] !== -1 || values[element.name] !== "") {
          query_to_set += element.name + "=" + values[element.name] + "&";
          console.log(values[element.name]);
          let value =
            element.type == "select" && values[element.name] != -1
              ? element.options.filter(
                  (option) => option.value == values[element.name]
                )[0]["text"]
              : values[element.name];
          query_tag_to_set = [
            ...query_tag_to_set,
            { title: element.placeholder, value: value },
          ];
        }
      });
      setquery(query_to_set);
      setQueryTags(query_tag_to_set);
      setUpdate(!update);
    } else setCalling(false);
  };
  React.useEffect(() => {
    if (query.length == 0) setCalling(false);
  }, [query]);
  return (
    <>
      <Form role="form" onSubmit={handleSubmit}>
        {query_list.length > 0
          ? query_list.map((element, index) => (
              <InputField
                key={index}
                type={element.type}
                name={element.name}
                placeholder={element.placeholder}
                options={element.options}
                value={values[element.name]}
                error={errors[element.name]}
                handleChange={handleInputChange}
                setState={element.setState}
                disabled={calling}
              />
            ))
          : null}
        <div className="text-center" style={{ clear: "left" }}>
          <Button
            className="my-4"
            color="primary"
            type="submit"
            disabled={calling}
          >
            {calling ? <Spinner animation="border" variant="dark" /> : "Submit"}
          </Button>
        </div>
      </Form>
    </>
  );
}
