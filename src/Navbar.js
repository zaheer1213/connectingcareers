import React, { useState } from "react";
import { Container, Row, Col, Nav, Button, Form } from "react-bootstrap";
import "./Navbar.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { BASEURL } from "./Comman";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and restrict to 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setError(""); // Clear any previous error
    }
  };

  const handleSubmit = async () => {
    if (mobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const response = await axios.post(`${BASEURL}/courses/mobile`, {
        contact_no: mobileNumber,
      });

      if (response) {
        const link = document.createElement("a");
        link.href = `/CCBrochure.pdf`; // Path to your PDF in the public folder
        link.download = "CCBrochure.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the link element
        handleClose();
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (error) {
      setError("Failed to submit. Please try again.");
    }
  };
  return (
    <>
      {/* // nav bar page */}
      <Container fluid>
        <Row className="py-3 align-items-center">
          <Col xs={3} md={2} className="d-flex justify-content-start">
            <div className="logo">
              <a href="/">
                <img
                  className="connecting-careers-final-logo-"
                  alt="Logo"
                  src="/connecting-careers-final-logo02-1@2x.png"
                />
              </a>
            </div>
          </Col>
          <Col xs={6} md={8} className={`nav-col ${isOpen ? "open" : ""}`}>
            <Nav className="nav-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/allcourses" className="active">
                Courses
              </Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="" onClick={() => handleShow()}>
                Brochure
              </Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col xs={3} md={2} className="d-flex justify-content-end">
            <img
              className="iconfeather-icon d-none d-md-block"
              alt="Icon"
              src="/iconfeather-icon.svg"
            />
            <button
              className="menu-toggle d-block d-md-none"
              onClick={toggleMenu}
            >
              <img src="/iconfeather-icon.svg" alt="Menu Icon" />
            </button>
          </Col>
        </Row>
      </Container>
      {/* pop model  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Download Brochure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="00000 00000"
                value={mobileNumber}
                onChange={handleInputChange}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="clickbutton" onClick={handleSubmit}>
            Submit & Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
