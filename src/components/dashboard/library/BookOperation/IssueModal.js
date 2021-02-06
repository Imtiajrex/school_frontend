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
import InputField from "components/controls/InputField";
import { ValidateInput } from "components/crud/ValidateInput";
export default function IssueModal(props) {
  const {
    update,
    setUpdate,
    open,
    setopen,
    books_show,
    books_ids,
    book_issuer_data,
  } = props;
  const [book_ids, setBookIds] = useState([]);
  const [book_to_show, setBookToShow] = useState([]);
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [calling, setCalling] = useState(false);
  const [values, setValues] = useState({
    book_issued_date: "",
    book_return_date: "",
  });
  const validate = (fieldValues = values) => {
    return Object.values(fieldValues).every((el) => el != "");
  };
  React.useEffect(() => {
    setBookIds(books_ids.length > 0 ? books_ids : []);
    setBookToShow(books_show.length > 0 ? books_show : []);
  }, [books_ids]);
  const alert_message_time = 2500;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCalling(true);
    if (validate()) {
      const data = { ...values, ...book_issuer_data, book_ids };
      const request = {
        method: "post",
        url: "library/issue_books",
        data: data,
      };
      Call(request)
        .then((res) => {
          setSuccessMessage(res.message);
          setCalling(false);
          setUpdate(!update);
          setTimeout(() => setSuccessMessage(""), alert_message_time);
        })
        .catch((err) => {
          setFailMessage(err);
          setTimeout(() => setFailMessage(""), alert_message_time * 2);
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
        toggle={() => setopen(false)}
        modalTransition={{ timeout: 50 }}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Issue Books
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setopen(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent p-1">
              <div className="mb-3 ml-3">
                <p className="text-dark">User Info: </p>
                <div className="d-flex space-between flex-wrap">
                  <Button
                    color="warning"
                    size="sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "1rem",
                    }}
                  >
                    Student Name: {book_issuer_data.book_issued_to_name}
                  </Button>
                  <Button
                    color="warning"
                    size="sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "1rem",
                    }}
                  >
                    Student ID: {book_issuer_data.book_issued_to_id}
                  </Button>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-dark">Selected Books: </p>
                <div className="d-flex space-between flex-wrap">
                  {book_to_show.length > 0
                    ? book_to_show.map((element, index) => (
                        <Button
                          key={index}
                          color="success"
                          size="sm"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "0.3rem",
                          }}
                          onClick={() => {
                            let new_val = [...book_ids];
                            new_val.splice(index, 1);
                            setBookIds(new_val);
                            new_val = [...book_to_show];
                            new_val.splice(index, 1);
                            setBookToShow(new_val);
                          }}
                        >
                          {element}
                        </Button>
                      ))
                    : null}
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-4">
              <Form role="form" onSubmit={handleSubmit}>
                <div className="text-center" style={{ clear: "left" }}>
                  <InputField
                    type="date"
                    placeholder="Issued Date"
                    name="book_issued_date"
                    value={values["book_issued_date"]}
                    error={values["book_issued_date"] == ""}
                    handleChange={handleChange}
                  />
                  <InputField
                    type="date"
                    placeholder="To Return Date"
                    name="book_return_date"
                    value={values.book_return_date}
                    error={
                      values.book_return_date == "" ||
                      values.book_return_date == undefined ||
                      values.book_return_date == null
                    }
                    handleChange={handleChange}
                  />
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
            </CardBody>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
