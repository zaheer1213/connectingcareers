import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  return (
    <Container
      className="text-center paymentSuccess-container"
      style={{ marginTop: "50px" }}
    >
      <Row>
        <Col>
          <FontAwesomeIcon icon={faCheckCircle} size="5x" color="green" />
          <h1 className="mt-4">Payment Successful!</h1>
          <p>Your payment has been successfully processed.</p>
          <Button href="/learning" className="clickbutton mt-3">
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;
