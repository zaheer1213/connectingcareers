import React from "react";
import Navbar from "./Navbar";
import { Col, Container, Row } from "react-bootstrap";
import "./Aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Section from "./Section";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="aboutusbg">
        <Row>
          <div className="aboutheading">
            <h1 className="hading">
              <span>About</span> <span style={{ color: "red" }}>C</span>
              onnecting <span style={{ color: "red" }}>C</span>areers
            </h1>
            <div className="connections">
              <p>
                At Connecting Careers, we’re more than just an educational
                institute—we’re your launchpad <br /> into the dynamic world of
                digital marketing. Whether you’re looking to start a new career,
                <br />
                enhance your skills, or elevate your current role, our
                comprehensive courses are designed to <br /> equip you with the
                knowledge and tools you need to succeed.
              </p>
            </div>
            <div className="aboutusfreme-img">
              <img src="/aboutusfreme.png" alt="about-section-img" />
            </div>
          </div>
        </Row>
      </Container>
      <Container className="about-cards">
        <Row className="about-cards-row">
          <Col md={4}>
            <img src="/1stcardsimg.png" alt="" />
          </Col>
          <Col md={3}>
            <div>
              <div className="aboutus-paerticular-cards">
                <div className="aboutimg">
                  <img src="/image 32.png" alt="aboutimg" />
                </div>{" "}
                &nbsp;&nbsp;
                <h2>OUR VISION</h2>
                <hr />
              </div>
              <div className="mt-3">
                <p className="text-start">
                  To become the leading provider of digital skills training in
                  India, transforming the nation into a hub of digital
                  innovation and economic prosperity.
                </p>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div>
              <div className="aboutus-paerticular-cards">
                <div className="aboutimg">
                  <FontAwesomeIcon
                    icon={faRocket}
                    style={{ fontSize: "40px", color: "red" }}
                  />
                </div>{" "}
                &nbsp;&nbsp;
                <h2>OUR MISSION</h2>
                <hr />
              </div>
              <div className="mt-3">
                <p className="text-start">
                  Connecting Careers is dedicated to empowering Indians with the
                  digital skills needed to thrive in the modern workforce. We
                  bridge the gap between theoretical knowledge and practical
                  application, ensuring that every individual has the
                  opportunity to unlock their potential and achieve career
                  success.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="founder-cards-row">
          <Col md={4}>
            <div className="founder-cards">
              <div>
                <img
                  src="/group-1000006094-1@2x.png"
                  alt="director"
                  className="directorimges"
                />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h2>Hey there, future leader!</h2>
              <p>
                I’ve spent the last 16 years in the crazy world of marketing,
                both here in India and overseas. And let me tell you, I’ve seen
                firsthand how most schools just aren't cutting it when it comes
                to preparing students for the real world. It’s like they’re
                teaching you to drive a car without ever letting you start the
                engine!
              </p>
              <p>
                That's why I created Connecting Careers. I wanted to build a
                place where you can learn the skills that actually matter, the
                ones that will help you crush it in your career. This isn't just
                about book smarts – it's about getting your hands dirty and
                learning by doing.
              </p>
              <p>
                I've packed everything I know into these courses. It's the pure
                essence of 16 years of kicking butt in the industry. So if
                you're ready to level up and become the boss of your future,
                let's do this together.
              </p>
              <p>See you on the inside,</p>
              <strong>Immi Inamdar</strong>
              <br />
              <strong>CEO & Expert Trainer, Connecting Careers</strong>
              <div className="founder-socoil mt-3">
                <div>
                  <img
                    src="/icons8-linkedin-64.png"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                  <img
                    src="/icons8-instagram-64.png"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                  <img
                    src="/icons8-facebook-50.png"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="aboutend-section">
        <Row>
          <Col md={4}>
            <div className="hedingsd">
              <h2>LIFE AT CC</h2>
            </div>
            <p className="mt-3">
              Explore the heart of Connecting Careers through our gallery, where
              vibrant moments of learning come to life. From interactive
              workshops and dynamic classroom activities to inspiring student
              success stories, each photo captures the essence of our commitment
              to excellence in digital marketing education. Witness how our
              hands-on approach and dedicated support are empowering individuals
              to thrive and achieve their professional aspirations in the
              ever-evolving digital landscape.
            </p>
          </Col>
          <Col md={6}>
            <div className="section-img">
              <img src="/scetionimg.png" alt="sectionimg" />
            </div>
          </Col>
        </Row>
      </Container>
      <Section />
      <Footer />
    </>
  );
};

export default Aboutus;
