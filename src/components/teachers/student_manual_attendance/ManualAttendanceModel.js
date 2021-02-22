import React, { useState } from "react";
import Alert from "reactstrap/lib/Alert";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import Spinner from "reactstrap/lib/Spinner";
import { Call } from "services/API/Call";

export default function ManualAttendanceModel({
  open,
  setOpen,
  id,
  update,
  setUpdate,
  url,
  values,
}) {
  const [sending, setsending] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const sendRecord = () => {
    setsending(true);
    const request = { method: "post", url: `${url}`, data: { ids: values } };
    Call(request)
      .then((res) => {
        setSuccessMessage(res.message);
        setUpdate(!update);
        setsending(false);
        setTimeout(() => {
          setOpen(false);
        }, 500);
      })
      .catch((err) => {
        setFailMessage(err);
        setsending(false);
      });
  };

  React.useEffect(() => {
    setSuccessMessage("");
    setFailMessage("");
    setsending(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        isOpen={open}
        toggle={() => setOpen(false)}
        modalTransition={{ timeout: 50 }}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Attendance Modal
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
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
          Are you sure you want to delete this record?
        </div>
        <div className="modal-footer">
          <Button
            color="success"
            type="button"
            onClick={sendRecord}
            disabled={sending}
          >
            {sending ? (
              <Spinner animation="border" variant="dark" />
            ) : (
              "Mark Present"
            )}
          </Button>
          <Button
            color="danger"
            type="button"
            onClick={sendRecord}
            disabled={sending}
          >
            {sending ? (
              <Spinner animation="border" variant="dark" />
            ) : (
              "Mark Absent"
            )}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
