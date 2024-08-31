import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./WhyChooseUs.css";
import ContactModal from "./ContactModal";

const WhyChooseUs = () => {
  const [modalShow, setModalShow] = useState(false);

  const cards = [
    {
      id: 1,
      image: "/Frame 285.png",
      title: "100% Placement",
      text: "At Connecting Careers, we are committed to your success. Our 100% job placement guarantee is a testament to our confidence in your ability to thrive in the dynamic world of digital marketing.",
    },
    {
      id: 2,
      image: "/ok.png",
      title: "100% Internship",
      text: "At Connecting Careers, we believe that practical experience is the cornerstone of a successful career in digital marketing. That's why we offer a 100% internship guarantee to all our students.",
    },
    {
      id: 3,
      image: "/Frame 285 (2).png",
      title: "20% Theory and 80% Practical Course",
      text: "At Connecting Careers, we believe in the power of practical learning. Our courses are structured to deliver a unique blend of theoretical knowledge and hands-on experience.",
    },
    {
      id: 4,
      image: "/Frame 285 (3).png",
      title: "Education Loan Facility Available with EMI",
      text: "At Connecting Careers, we believe that everyone deserves the opportunity to pursue their passion. That's why we offer convenient education loan facilities to help you turn your dreams into reality.",
    },
    {
      id: 5,
      image: "/Frame 285 (4).png",
      title: "Industry Expert Faculty",
      text: "At Connecting Careers, we believe that learning from industry experts is paramount to achieving success in the dynamic world of digital marketing. Our faculty comprises seasoned professionals with extensive experience in real-world challenges.",
    },
    {
      id: 6,
      image: "/Frame 285 (5).png",
      title: "Weekend Batches (160 Hours)",
      text: "Only 26 spots open for Connecting Careers. Competition is fierce. Don't miss your chance to be a front-runner. Apply now",
    },
  ];

  return (
    <>
      <Container fluid className="why-choose-us-main mt-5">
        <Container className="why-choose-us-content">
          <Row>
            <div className="mb-5">
              <h1 className="hading">
                <span style={{ color: "red" }}>B</span>enefits of join
                Connecting Careers{" "}
              </h1>
              <div className="building-strong-connections">
                Unlock Exclusive Advantages That Propel Your Digital Marketing
                Career Forward
              </div>
            </div>
            {cards.map((card, index) => (
              <Col
                key={card.id}
                lg={4}
                className={`mb-4 ${
                  index === cards.length - 1 ? "center-last-card" : ""
                }`}
              >
                <Card className="custom-card-why">
                  <Row noGutters>
                    <Col md={4}>
                      <Card.Img
                        variant="top"
                        src={card.image}
                        className="card-img-why"
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Body className="cardb">
                        <Card.Title className="title">{card.title}</Card.Title>
                        <Card.Text className="">{card.text}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <a
              href="https://wa.me/9822666114?text=Hello, I'm interested."
              target="_blank"
            >
              <Button className="btn custom-btn">Apply Now</Button>
            </a>
          </div>
        </Container>
      </Container>
      <Container fluid className="mt-5 py-5">
        <Row>
          <Col>
            <img
              src="/Frame 1000006114.png"
              alt="imges"
              className="sectionimg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyChooseUs;
