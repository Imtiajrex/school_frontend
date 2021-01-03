import React, { useState } from "react";
import Alert from "reactstrap/lib/Alert";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import Spinner from "reactstrap/lib/Spinner";
import { Call } from "services/API/Call";

export default function Delete({
  open,
  setOpenDelete,
  id,
  update,
  setUpdate,
  url,
}) {
  const [deleting, setdeleting] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const deleteRecord = () => {
    setdeleting(true);
    const request = { method: "delete", url: `${url}/${id}` };
    Call(request)
      .then((res) => {
        setSuccessMessage(res.message);
        setUpdate(!update);
        setTimeout(() => {
          setOpenDelete(false);
        }, 500);
      })
      .catch((err) => {
        setFailMessage(err);
        setdeleting(true);
      });
  };

  React.useEffect(() => {
    setSuccessMessage("");
    setFailMessage("");
    setdeleting(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        isOpen={open}
        toggle={() => setOpenDelete(false)}
        modalTransition={{ timeout: 50 }}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete Modal
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setOpenDelete(false)}
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
            color="danger"
            type="button"
            onClick={deleteRecord}
            disabled={deleting}
          >
            {deleting ? (
              <Spinner animation="border" variant="dark" />
            ) : (
              "Submit"
            )}
          </Button>
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => setOpenDelete(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
