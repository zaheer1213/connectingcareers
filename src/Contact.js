import React, { useState } from "react";
import Navbar from "./Navbar";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import "./Contact.css";
import Section from "./Section";
import Footer from "./Footer";
import axios from "axios";
import { BASEURL } from "./Comman";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    profession: "",
    interestedIn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        contact_no: formData.phoneNumber,
        profession: formData.profession,
        interested_in: formData.interestedIn,
      };
      const response = await axios.post(`${BASEURL}/courses/contact`, payload);
      if (response) {
        handleShow();
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          profession: "",
          interestedIn: "",
        });
      }
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <>
      <Navbar />
      <Container fluid className="contact-main">
        <Row>
          <Col md={6}>
            <div>
              <h1 className="heading">CONTACT US</h1>
              <p className="mt-3">
                We’re here to help! Whether you have questions about our
                <br />
                courses, need support, or want to learn more about <br />
                Connecting Careers, feel free to reach out. Our team is ready to
                assist you.
              </p>
              <h3 className="hedaingd">Why Connecting Careers</h3>
              <ul className="datalist text-center">
                <li className="mb-2">
                  <img src="/image 20.png" alt="verify" className="list-icon" />
                  100% Placement
                </li>
                <li className="mb-2">
                  <img src="/image 20.png" alt="verify" className="list-icon" />
                  100% Internship
                </li>
                <li className="mb-2">
                  <img src="/image 20.png" alt="verify" className="list-icon" />
                  20% Theory and 80% Practical Course
                </li>
                <li className="mb-2">
                  <img src="/image 20.png" alt="verify" className="list-icon" />
                  Education Loan Facility Available with EMI
                </li>
                <li className="mb-2">
                  <img src="/image 20.png" alt="verify" className="list-icon" />
                  Industry Expert Faculty
                </li>
                <li className="mb-2">
                  <img src="/image 20.png" alt="verify" className="list-icon" />
                  Weekend Batches (160 Hours)
                </li>
                <li className="mb-2">
                  <img src="/image 20.png" alt="verify" className="list-icon" />
                  Only 26 Seats available
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="form-div">
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="00000 00000"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                >
                  <Form.Label>Profession</Form.Label>
                  <Form.Select
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                  >
                    <option value="">Select Profession</option>
                    <option value="Students">Students</option>
                    <option value="Growing Influencers">
                      Growing Influencers
                    </option>
                    <option value="Business owners">Business owners</option>
                    <option value="Startup owners">Startup owners</option>
                    <option value="Working Professionals">
                      Working Professionals
                    </option>
                    <option value="Celebrities">Celebrities</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput5"
                >
                  <Form.Label>Interested in</Form.Label>
                  <Form.Select
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                  >
                    <option value="">Select Interest</option>
                    <option value="Digital Marketing for Students">
                      Digital Marketing for Students
                    </option>
                    <option value="Digital Marketing for Influencers">
                      Digital Marketing for Influencers
                    </option>
                    <option value="Digital Marketing for Business owners">
                      Digital Marketing for Business owners
                    </option>
                    <option value="Digital Marketing for Startup owners">
                      Digital Marketing for Startup owners
                    </option>
                    <option value="Digital Marketing for Working Professionals">
                      Digital Marketing for Working Professionals
                    </option>
                    <option value="Digital Marketing for Celebrities">
                      Digital Marketing for Celebrities
                    </option>
                  </Form.Select>
                </Form.Group>

                <Button type="submit" className="clickbutton">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      {/* model */}{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Form submitted successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Section />
      <Footer />
    </>
  );
};

export default Contact;
