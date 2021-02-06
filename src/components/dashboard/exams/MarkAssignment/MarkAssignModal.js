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
import { ValidateInput } from "components/crud/ValidateInput";
import MarkAssignment from "./MarkAssignment";
export default function MarkAssignModal(props) {
  const { url, open, setopen, data, update, setUpdate, tags } = props;

  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={open}
        toggle={() => setopen(false)}
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
            onClick={() => setopen(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0  p-0">
            <CardHeader className="bg-transparent p-3">
              {tags.length > 0
                ? tags.map((el, idx) => (
                    <Button color="success" size="sm" key={idx}>
                      {el.title} : {el.value}
                    </Button>
                  ))
                : null}
            </CardHeader>
            <CardBody className="py-lg-4 pl-0  pr-0">
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
              <MarkAssignment data={data} />
            </CardBody>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
