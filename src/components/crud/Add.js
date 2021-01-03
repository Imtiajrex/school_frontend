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
export default function Add(props) {
  const {
    url,
    open,
    setOpenAdd,
    add_data,
    initial_values,
    update,
    setUpdate,
  } = props;

  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [calling, setCalling] = useState(false);

  const { values, handleInputChange, errors, setErrors, resetForm } = useForm(
    initial_values
  );

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // eslint-disable-next-line array-callback-return
    Object.values(add_data).map((element, index) => {
      if (!element.required) return false;
      if (element.name in fieldValues) {
        console.log(fieldValues[element.name]);
        temp[element.name] =
          fieldValues[element.name].length === 0 ||
          (element.type === "select" && fieldValues[element.name] === -1);
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
      const data = { ...values };
      const request = { method: "post", url: url, data: data };
      Call(request)
        .then((res) => {
          setUpdate(!update);
          setSuccessMessage(res.message);
          setCalling(false);
          resetForm();
          setTimeout(() => setSuccessMessage(""), alert_message_time);
        })
        .catch((err) => {
          setFailMessage(err);
          setTimeout(() => setFailMessage(""), alert_message_time);
          setCalling(false);
        });
    } else setCalling(false);
  };
  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={open}
        toggle={() => setOpenAdd(false)}
        modalTransition={{ timeout: 50 }}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setOpenAdd(false)}
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
                {add_data.map((element, index) => (
                  <InputField
                    key={index}
                    type={element.type}
                    placeholder={element.placeholder}
                    name={element.name}
                    handleChange={handleInputChange}
                    value={values[element.name]}
                    error={errors[element.name]}
                    disabled={calling}
                  />
                ))}

                <div className="text-center">
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
