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
export default function ReturnModal(props) {
  const { open, setopen, book, book_issuer_data, update, setUpdate } = props;
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [calling, setCalling] = useState(false);
  const [returned_at, setReturnedAt] = useState("");
  const alert_message_time = 2500;
  const handleSubmit = (event) => {
    event.preventDefault();
    setCalling(true);
    if (returned_at != "" && returned_at != null && returned_at != undefined) {
      const data = { returned_at };
      const request = {
        method: "put",
        url: "library/issue_books/" + book.id,
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
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-4">
              <Form role="form" onSubmit={handleSubmit}>
                <div className="text-center" style={{ clear: "left" }}>
                  <InputField
                    type="text"
                    placeholder="Book"
                    name="book_name"
                    value={book["book_name"]}
                    disabled={true}
                  />
                  <InputField
                    type="text"
                    placeholder="Issued Date"
                    name="book_issued_date"
                    value={book["book_issued_date"]}
                    disabled={true}
                  />
                  <InputField
                    type="text"
                    placeholder="To Return Date"
                    name="book_return_date"
                    value={book.book_return_date}
                    disabled={true}
                  />
                  <InputField
                    type="date"
                    placeholder="Returned Date"
                    name="returned_at"
                    value={returned_at}
                    handleChange={(e) => setReturnedAt(e.target.value)}
                    disabled={calling}
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
