/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import InputField from "components/controls/InputField";
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
import PaymentInput from "./PaymentInput";
export default function DuePaymentModal(props) {
  const {
    url,
    open,
    setPaymentModal,
    data,
    query_data,
    update,
    setupdate,
  } = props;
  const {
    student_id,
    student_identifier,
    student_name,
    session_id,
    session,
  } = query_data;

  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [calling, setCalling] = useState(false);
  const [date, setDate] = useState("");
  const [receipt, setReceipt] = useState("");

  const [clear, setclear] = useState(false);

  const new_value = {
    id: "",
    payment_category: "",
    payment_info: "",
    payment_amount: "",
    paid_amount: "",
  };
  const new_error = {
    id: false,
    payment_category: false,
    payment_info: false,
    payment_amount: false,
    paid_amount: false,
  };
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState([new_error]);
  React.useEffect(() => {
    if (data != values) {
      setValues(data);
      setErrors(Array(data.length).fill(new_error));
    }
  }, [data]);
  const [std_id, setStdId] = useState("");
  React.useEffect(() => {
    if (student_identifier != undefined) setStdId(student_identifier);
  }, [student_identifier]);

  const handleInputChange = (index, vals) => {
    let val = [...values];
    val[index] = vals;
    setValues(val);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const validate = (fieldValues = values) => {
    if (date == "" || date == null) return false;
    let temp = [...errors];
    values.map((element, index) => {
      if (
        element["payment_category"] == -1 ||
        element["payment_category"] == "" ||
        element["payment_category"] == null
      )
        temp[index]["payment_category"] = true;
      else temp[index]["payment_category"] = false;
      if (element["payment_info"] == -1) temp[index]["payment_info"] = true;
      else temp[index]["payment_info"] = false;
      if (element["payment_amount"] == "" || element["payment_amount"] == null)
        temp[index]["payment_amount"] = true;
      else temp[index]["payment_amount"] = false;
      if (element["paid_amount"] == "" || element["paid_amount"] == null)
        temp[index]["paid_amount"] = true;
      else temp[index]["paid_amount"] = false;
    });

    setErrors([...temp]);

    if (fieldValues === values)
      return temp.every((x) => Object.values(x).every((y) => y == false));
  };
  const alert_message_time = 30000;
  const handleSubmit = (event) => {
    event.preventDefault();
    setCalling(true);
    if (validate()) {
      const data = {
        date: date,
        session_id: session_id,
        student_id: student_id,
        payments: [...values],
      };
      const request = { method: "post", url: url, data: data };
      Call(request)
        .then((res) => {
          setSuccessMessage(res.message);
          setReceipt(res.receipt_id);
          setCalling(false);
          setDate("");
          setValues([new_value]);
          setclear(true);
          setErrors([new_error]);
          setupdate(!update);

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
        size="md"
        isOpen={open}
        toggle={() => {
          setPaymentModal(false);
        }}
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
            onClick={() => {
              setPaymentModal(false);
            }}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>

        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent py-1 px-4 ">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1rem",
                }}
              >
                <Button
                  color="warning"
                  size="sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "250px",
                    marginRight: "1rem",
                    marginTop: "0.3rem",
                  }}
                >
                  Student ID : {student_identifier}
                </Button>
                <Button
                  color="warning"
                  size="sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "250px",
                    marginRight: "1rem",
                    marginTop: "0.3rem",
                  }}
                >
                  Student Name : {student_name}
                </Button>
                <Button
                  color="warning"
                  size="sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "250px",
                    marginRight: "1rem",
                    marginTop: "0.3rem",
                  }}
                >
                  Session : {session}
                </Button>
              </div>
            </CardHeader>
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
                  <br />
                  {receipt != undefined && receipt != "" ? (
                    <a
                      className="btn btn-white"
                      href="#"
                      size="md"
                      color="white"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          "/print/payments/receipt?receipt_id=" +
                            receipt +
                            "&student_id=" +
                            std_id,
                          "Print Receipt",
                          "height=600,width=800"
                        );
                        return false;
                      }}
                    >
                      Receipt: {receipt} <i className="fas fa-directions" />
                    </a>
                  ) : null}
                </Alert>
              ) : null}
              <Form role="form" onSubmit={handleSubmit}>
                <InputField
                  type="date"
                  placeholder="Payment Date"
                  name="date"
                  handleChange={handleDate}
                  value={date}
                  error={date == "" || date == null}
                  disabled={calling}
                />
                {values.map((element, index) => (
                  <PaymentInput
                    key={index}
                    clear={clear}
                    setclear={setclear}
                    base_value={values[index]}
                    error={errors[index]}
                    index={index}
                    handleInputChange={handleInputChange}
                    disabled={calling}
                  />
                ))}

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
