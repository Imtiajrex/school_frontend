import React, { useState } from "react";
import { Button, Form, Alert, Spinner } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Call } from "../services/API/Call";
import { useForm } from "../components/useForm";
import { TextInput } from "../components/controls/Controls";

const initialFValues = {
  username: "",
  password: "",
};
export default function Login() {
  const [failMessage, setFailMessage] = useState("");

  const [logginIn, setLoggingIn] = useState(false);

  const { values, handleInputChange, errors, setErrors } = useForm(
    initialFValues,
    true
  );

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("username" in fieldValues)
      temp.username = fieldValues.username.length === 0;
    if ("password" in fieldValues)
      temp.password = fieldValues.password.length === 0;

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === false);
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggingIn(true);
    if (validate()) {
      Call({
        method: "post",
        url: "/login",
        data: {
          username: values.username,
          password: values.password,
          device_name: "web",
        },
      })
        .then((res) => {
          localStorage.setItem("token", res.token);
          localStorage.setItem("role", res.role);
          localStorage.setItem("permissions", res.permissions);
          localStorage.setItem("user_type", res.user_type);
          localStorage.setItem("user_id", res.user_id);
          window.location.reload();
          setLoggingIn(false);
        })
        .catch((error) => {
          setLoggingIn(false);
          setFailMessage(error);
        });
    } else setLoggingIn(false);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      className="bg-dark"
    >
      <div
        style={{
          maxWidth: "350px",
          textAlign: "center",
          boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
          padding: 45,
          borderRadius: 35,
        }}
        className="bg-white"
      >
        {failMessage !== undefined && failMessage.length > 0 ? (
          <Alert color="danger" style={{ fontSize: "12px" }}>
            {failMessage}
          </Alert>
        ) : null}

        <Form onSubmit={handleSubmit}>
          <h3 className="text-dark">Log In</h3>
          <TextInput
            name="username"
            placeholder="User Name"
            invalid_msg="Enter valid Username"
            value={values.username}
            handleChange={handleInputChange}
            disabled={logginIn}
            autoComplete="off"
            error={errors.username}
          />

          <TextInput
            name="password"
            placeholder="Password"
            invalid_msg="Enter valid Password"
            value={values.password}
            handleChange={handleInputChange}
            type="password"
            disabled={logginIn}
            error={errors.password}
          />
          <Button color="primary" type="submit" disabled={logginIn}>
            {logginIn ? (
              <Spinner animation="border" variant="dark" />
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}
