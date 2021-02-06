import React, { useState } from "react";
import Alert from "reactstrap/lib/Alert";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import Spinner from "reactstrap/lib/Spinner";
import { Call } from "services/API/Call";

export default function PublishModal({
  open,
  setopen,
  update,
  setupdate,
  url,
  data,
}) {
  const [publishing, setPublishing] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const publishRecord = (unpublish = false) => {
    console.log(unpublish);
    setPublishing(true);
    const request = {
      method: "post",
      url: `${url}${unpublish ? "?unpublish=true" : ""}`,
      data: { ids: data },
    };
    Call(request)
      .then((res) => {
        setSuccessMessage(res.message);
        setupdate(!update);
        setPublishing(false);
        setTimeout(() => {
          setopen(false);
        }, 1000);
      })
      .catch((err) => {
        setPublishing(false);
        setFailMessage(err);
      });
  };

  React.useEffect(() => {
    setSuccessMessage("");
    setFailMessage("");
    setPublishing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        isOpen={open}
        toggle={() => setopen(false)}
        modalTransition={{ timeout: 50 }}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Publish Modal
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
          Are you sure you want to Publish these results?
        </div>
        <div className="modal-footer">
          <Button
            color="success"
            type="button"
            onClick={() => publishRecord(false)}
            disabled={publishing}
          >
            {publishing ? (
              <Spinner animation="border" variant="dark" />
            ) : (
              "Publish"
            )}
          </Button>
          <Button
            color="warning"
            type="button"
            onClick={() => publishRecord(true)}
            disabled={publishing}
          >
            {publishing ? (
              <Spinner animation="border" variant="dark" />
            ) : (
              "Unpublish"
            )}
          </Button>
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => setopen(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
