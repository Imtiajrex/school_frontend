import { useForm } from "components/useForm";
import React, { useState } from "react";
import Alert from "reactstrap/lib/Alert";
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import Form from "reactstrap/lib/Form";
import Modal from "reactstrap/lib/Modal";
import Spinner from "reactstrap/lib/Spinner";
import { Call } from "services/API/Call";
import InputField from "../controls/InputField";
import { ValidateInput } from "./ValidateInput";

export default function Edit(props) {
  const {
    url,
    open,
    setOpenEdit,
    edit_values,
    update,
    setUpdate,
    setEditInfo,
    edit_data,
    modal_size,
    file = false,
  } = props;
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [calling, setCalling] = useState(false);
  const id = edit_values.id;
  const { values, handleInputChange, errors, setErrors } = useForm(edit_values);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // eslint-disable-next-line array-callback-return
    Object.values(edit_data).map((element, index) => {
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
      return Object.values(temp).every((x) => x === false);
  };

  const alert_message_time = 2500;
  const handleSubmit = (event) => {
    event.preventDefault();

    setCalling(true);
    if (validate()) {
      let request = {};
      if (file) {
        let data = new FormData();
        let i = 0;
        edit_data.map((el) => {
          console.log(el.name, values[el.name]);
          if (
            values[el.name] != null &&
            typeof values[el.name] == "object" &&
            values[el.name].length > 0 &&
            values[el.name][0].type != undefined
          ) {
            Array.from(values[el.name]).map((e) => data.append(el.name, e));
            i++;
          } else {
            data.append(el.name, values[el.name]);
          }
        });
        data.append("_method", "put");
        request = {
          method: "post",
          url: url + "/" + id,
          data: data,
          headers: {
            "Content-Type": i > 0 ? "multipart/form-data" : "application/json",
          },
        };
      } else {
        let data = {};
        Object.values(edit_data).map((el) => (data[el.name] = values[el.name]));
        request = {
          method: "put",
          url: url + "/" + id,
          data: data,
        };
      }
      Call(request)
        .then((res) => {
          console.log(res);
          setUpdate(!update);
          setSuccessMessage(res.message);

          setCalling(false);
          setTimeout(() => {
            if (open) setSuccessMessage("");
          }, alert_message_time);
        })
        .catch((err) => {
          setFailMessage(err);
          setCalling(false);
          setTimeout(() => {
            if (open) setFailMessage("");
          }, alert_message_time);
        });
    } else setCalling(false);
  };
  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        size={modal_size}
        isOpen={open}
        toggle={() => {
          if (open) setEditInfo({});
          setOpenEdit(false);
        }}
        modalTransition={{ timeout: 50 }}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Edit
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => {
              if (open) setEditInfo({});
              setOpenEdit(false);
            }}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent p-1"></CardHeader>
            <CardBody className="px-lg-5 py-lg-4">
              {failMessage !== undefined && failMessage.length > 0 ? (
                <Alert
                  color="danger"
                  style={{ fontSize: "12px", textAlign: "center" }}
                >
                  {failMessage}
                </Alert>
              ) : null}
              {successMessage !== undefined && successMessage.length > 0 ? (
                <Alert
                  color="success"
                  style={{ fontSize: "12px", textAlign: "center" }}
                >
                  {successMessage}
                </Alert>
              ) : null}
              <Form role="form" onSubmit={handleSubmit}>
                {edit_data.map((element, index) => {
                  return element.customInput == undefined ? (
                    <InputField
                      key={index}
                      type={element.type}
                      placeholder={element.placeholder}
                      name={element.name}
                      handleChange={handleInputChange}
                      value={values[element.name]}
                      error={errors[element.name]}
                      disabled={
                        element.disabled != undefined
                          ? element.disabled
                          : calling
                      }
                      multiple={
                        element.multiple != null &&
                        element.multiple != undefined
                          ? true
                          : false
                      }
                      options={element.options}
                      setState={element.setState}
                    />
                  ) : (
                    <element.customInput
                      key={index}
                      title={element.title}
                      type={element.type}
                      placeholder={element.placeholder}
                      name={element.name}
                      handleChange={handleInputChange}
                      value={values[element.name]}
                      error={errors[element.name]}
                      disabled={
                        element.disabled != undefined
                          ? element.disabled
                          : calling
                      }
                      children={element.children}
                      options={element.options}
                      setState={element.setState}
                    />
                  );
                })}

                <div className="text-center" style={{ clear: "left" }}>
                  <Button
                    className="my-4"
                    color="primary"
                    type="submit"
                    disabled={calling}
                  >
                    {calling ? (
                      <Spinner animation="border" variant="dark" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
