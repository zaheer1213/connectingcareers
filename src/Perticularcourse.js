import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Perticularcourse.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCalendarDays,
  faClock,
  faHandHoldingDroplet,
} from "@fortawesome/free-solid-svg-icons";
import Modules from "./Modules";
import Modal from "react-bootstrap/Modal";
import Footer from "./Footer";
import Section from "./Section";

const Perticularcourse = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <Container fluid className="particularcoruse">
        <Container>
          <Row className="align-items-center gx-4 mt-5">
            <Col md={6} className="firstcol">
              <h2>Professional Digital Marketing Program</h2>
              <p>
                Boost your career with digital marketing courses from Connecting
                Careers Professional Digital Marketing Program. This 160-hour
                course, designed by industry experts, teaches you key digital
                marketing skills with a focus on 80% practical work and 20%
                theory. We provide 100% placement support and a 3-month
                internship to give you hands-on experience. You'll earn valuable
                certificates and be ready to land high-paying jobs with top
                companies worldwide.
              </p>
              <Button className="apply-btn" onClick={() => handleShow()}>
                Apply now
              </Button>
            </Col>
            <Col md={6} className="align-items-center">
              <h3 className="hedaingd">Why Connecting Careers</h3>
              <ul className="datalist">
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
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="cards-div">
        <Row className="cards-row">
          <Col md={3} className="mb-3">
            <div
              className="cutome-cards"
              style={{ background: "black", color: "white" }}
            >
              <FontAwesomeIcon icon={faCalendarDays} /> &nbsp;&nbsp; BATCH START
              <div className="mt-2">
                <h2>15 SEP 2024</h2>
              </div>
              <div>
                <h6>WEEKEND BATCH CLASSROOM</h6>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="cutome-cards">
              <FontAwesomeIcon icon={faClock} /> &nbsp;&nbsp; DURATION
              <div className="mt-2">
                <h2>160 Hrs</h2>
              </div>
              <div>
                <h6>100% Placement | 3 MONTHS INTERNSHIP</h6>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="cutome-cards">
              <FontAwesomeIcon icon={faHandHoldingDroplet} /> &nbsp;&nbsp;
              COURSE FEE
              <div className="mt-2">
                <h3>
                  <span style={{ textDecoration: "line-through" }}>
                    Rs 1,00,000/-
                  </span>{" "}
                  <strong>Rs 66,000/-</strong> + Taxes
                </h3>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="cutome-cards">
              <FontAwesomeIcon icon={faBookOpen} /> &nbsp;&nbsp; BATCH START
              <div className="mt-2">
                <h2>15 SEP 2024</h2>
              </div>
              <div>
                <h6>WEEKEND BATCH CLASSROOM</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modules />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inquire Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="number" placeholder="00000 00000" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Profession</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="2">Students</option>
                <option value="1">Growing Influencers</option>
                <option value="3">Business owners</option>
                <option value="4">Startup owners</option>
                <option value="5">Working Professionals</option>
                <option value="6">Celebrities</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Interested in</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Digital Marketing for Students</option>
                <option value="1">Digital Marketing for Influencers</option>
                <option value="2">Digital Marketing for Business owners</option>
                <option value="3">Digital Marketing for Startup owners</option>
                <option value="3">
                  Digital Marketing for Working Professionals
                </option>
                <option value="3">Digital Marketing for Celebrities</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="clickbutton" onClick={handleClose}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
      <Section />
      <Footer />
    </>
  );
};

export default Perticularcourse;
