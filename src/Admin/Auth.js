import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import "./Auth.css";
import { EMAIL, PASSWORD } from "../Comman";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPasswprd] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (!email || !password) {
      setError(true);
    } else {
      if (email === EMAIL && password === PASSWORD) {
        navigate("/admin-contact");
      } else {
        handleShow();
        setEmail("");
        setPasswprd("");
      }
    }
  };
  return (
    <>
      <Container className="auth-conatiner py-5">
        <div className="mb-5">
          <h2>Login</h2>
        </div>
        <Form className="custome-form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-danger">email is require</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPasswprd(e.target.value)}
            />
            {error && <p className="text-danger">password is require</p>}
          </Form.Group>
          <Button variant="danger" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Check Your Email Or Password</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Auth;
