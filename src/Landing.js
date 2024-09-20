import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faPerson,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";

const Landing = () => {
  const [time, setTime] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  const options = [
    "Completed education in one field, but seeking a career in another.",
    "Currently employed, but uncertain about job security.",
    "Not interested in my current job and want to change my career.",
    "Under pressure from family to succeed as a graduate.",
    "Own a business, but it has not grown significantly.",
    "Aim to upgrade skills as a consultant.",
    "As a retired person, interested in sharing experiences with others.",
    "As a housewife, I want to establish a personal identity beyond domestic responsibilities.",
  ];
  return (
    <>
      <div className="bg-dark">
        <div className="logo-img ">
          <img
            className=""
            alt="logo"
            src="/connecting-careers-final-logo04-1@2x.png"
          />
        </div>
      </div>
      <div className="landing-main">
        <Container fluid className="landing-main">
          <Row>
            <div className="image-container">
              <div>
                <h1>
                  Learn how to become a{" "}
                  <span className="text-danger">brand</span> and create <br />{" "}
                  your
                  <span className="text-danger"> market value</span>
                </h1>
                <h5 className="mt-5">
                  From the one who has created more than 200 individual and
                  company brands.
                </h5>
              </div>
            </div>
            <Container className="custom-container">
              <Row>
                <Col md={4}>
                  <div className="image-container">
                    <img
                      src="/setingman.jpg"
                      alt="images"
                      className="full-img"
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <Row>
                    <Col>
                      <div className="feautrescar">
                        <FontAwesomeIcon icon={faUserGraduate} />
                        &nbsp; Graduates
                      </div>
                    </Col>

                    <Col>
                      <div className="feautrescar">
                        <FontAwesomeIcon icon={faBusinessTime} />
                        &nbsp; Business Owners
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                      <div className="feautrescar">
                        <FontAwesomeIcon icon={faPerson} />
                        &nbsp; Housewives with Career Aspirations
                      </div>
                    </Col>
                    <Col>
                      <div className="feautrescar">
                        <FontAwesomeIcon icon={faUserTie} />
                        &nbsp; Confuse working professionals
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div className="text-center">
                      <Button className="btn custom-btn">
                        ENROL NOW ₹ 199
                      </Button>
                    </div>
                  </Row>
                  <Row className="mt-3 text-center">
                    <h5 className="text-white">
                      Only for those who are SERIOUS about career
                    </h5>
                  </Row>
                  <Row>
                    <Container
                      fluid
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Row>
                        <Col className="col-box column">
                          <div className="timer text-center">
                            {formatTime(time)} <br /> Min : Sec
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Container className="career-container py-5">
          <h1 className="mb-5">
            Check all the <span className="text-danger">answers</span> where
            your answer is YES{" "}
          </h1>
          <Row>
            {options.map((option, index) => (
              <Col md={6} key={index} className="mb-4">
                <div className="career-box p-3">
                  <input type="checkbox" id={`option-${index}`} />
                  <label htmlFor={`option-${index}`} className="ml-2">
                    {option}
                  </label>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <h5 className="text-center mt-3">
              If you have clicked or thinking to click any options then this
              career transforming session is for you{" "}
            </h5>
            <div className="text-center mt-3">
              <Button className="btn custom-btn">ENROL NOW ₹ 199</Button>
            </div>
          </Row>
          <Row>
            <Container
              fluid
              className="d-flex justify-content-center align-items-center mt-3"
            >
              <Row>
                <Col className="col-box column">
                  <div className="timer text-center text-dark">
                    {formatTime(time)} <br /> Min : Sec
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Row className="d-flex justify-content-center align-items-center">
              <div className="w-100 h-100 text-center">
                <img
                  src="/ebook.jpg"
                  alt="images"
                  className="img-fluid"
                  style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                />
              </div>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mt-5">
              <div className="text-center text-white">
                <h1>
                  Brand <span className="text-danger">Yourself</span>, Build
                  Your <span className="text-danger">Future</span> : A Practical
                  Guide to Personal{" "}
                  <span className="text-danger">Branding</span>
                </h1>
                <Row className="mt-5">
                  <Col lg={6}>
                    <div className="text-start mb-5">
                      <h4 className="boldHeading">Self-Discovery:</h4>
                      <ul>
                        <li>
                          Understand your passions, values, and strengths.
                        </li>
                        <li>
                          Reflect on your unique experiences and qualities.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-3">
                      <h4 className="boldHeading">Define Your Niche:</h4>
                      <ul>
                        <li>Identify your area of expertise or interest.</li>
                        <li>Research the market demand for your niche.</li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-5">
                      <h4 className="boldHeading">
                        Create a Compelling Personal Brand Story:
                      </h4>
                      <ul>
                        <li>
                          Develop a narrative that showcases your journey,
                          values, and unique selling points.
                        </li>
                        <li>
                          Craft a compelling message that resonates with your
                          target audience.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-3">
                      <h4 className="boldHeading">
                        Build a Strong Online Presence:
                      </h4>
                      <ul>
                        <li>Establish a professional website or blog.</li>
                        <li>
                          Leverage social media platforms to connect with your
                          audience.
                        </li>
                        <li>
                          Optimism your online content for search engines.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-5">
                      <h4 className="boldHeading">Develop Your Expertise:</h4>
                      <ul>
                        <li>Continuously learn and acquire new skills.</li>
                        <li>
                          Stay updated on industry trends and developments
                        </li>
                        <li>
                          Share your knowledge through articles, blog posts, or
                          speaking engagements.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-3">
                      <h4 className="boldHeading">Network Effectively:</h4>
                      <ul>
                        <li>
                          Build relationships with industry professionals and
                          potential clients.
                        </li>
                        <li>
                          Attend conferences, workshops, and networking events.
                        </li>
                        <li>Leverage online networking platforms.</li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-5">
                      <h4 className="boldHeading">
                        Create High-Quality Content:
                      </h4>
                      <ul>
                        <li>
                          Produce valuable and informative content that
                          addresses your audience's needs.
                        </li>
                        <li>
                          Use visuals, such as infographic or videos, to enhance
                          your content.
                        </li>
                        <li>
                          Share your content on social media and other relevant
                          platforms.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-3">
                      <h4 className="boldHeading">
                        Build Trust and Credibility:
                      </h4>
                      <ul>
                        <li>
                          Demonstrate your expertise through case studies,
                          testimonials, and certifications.
                        </li>
                        <li>
                          Be authentic and transparent in your communication.
                        </li>
                        <li>
                          Establish yourself as a thought leader in your field.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-5">
                      <h4 className="boldHeading">
                        Leverage Your Unique Selling Proposition (USP):
                      </h4>
                      <ul>
                        <li>
                          Identify what sets you apart from your competitors.
                        </li>
                        <li>
                          Clearly communicate your USP to your target audience.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="text-start mb-3">
                      <h4 className="boldHeading">
                        Measure and Analyst Your Progress:
                      </h4>
                      <ul>
                        <li>
                          Track your online metrics, such as website traffic and
                          social media engagement.
                        </li>
                        <li>
                          Use analytics tools to identify areas for improvement.
                        </li>
                        <li>
                          Continuously refine your brand strategy based on your
                          findings.
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Row>
          <Row className="mt-5">
            <div className="text-center">
              <Button className="btn custom-btn">ENROL NOW ₹ 199</Button>
            </div>
          </Row>
          <Row className="mt-3 text-center">
            <h5 className="text-white">
              Only for those who are SERIOUS about career
            </h5>
          </Row>
          <Row>
            <Container
              fluid
              className="d-flex justify-content-center align-items-center mb-3"
            >
              <Row>
                <Col className="col-box column">
                  <div className="timer text-center">
                    {formatTime(time)} <br /> Min : Sec
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Container className="mb-5">
          <Row>
            <Col md={6} className="director-image-column">
              <img
                src="/group-1000006094-1@2x.png"
                alt="Director"
                className="director-image"
              />
            </Col>
            <Col md={6} className="director-info-column">
              <div className="director-info">
                <h2 className="director-heading text-white">
                  Meet the Brand Man
                </h2>
                <p className="text-white">
                  Hi, I am Immi Inamdar with 17 years of versatile experience in
                  Brand Building and Marketing. I have been committed to
                  creating more than 200 individual + company brands. I have
                  worked in countries like the UK, USA, Dubai, India.
                </p>
                <div className="text-white mt-5">
                  <strong>Mr. Immi Inamdar</strong>
                  <p>Bsc., PGDBM, MBA, MS, M.Phil, LLB</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 text-white">
          <Row>
            <h1 className="text-center mb-5">What you will get</h1>
            <Col>
              <div className="mb-3">
                <h5>
                  <li>Self-Discovery and Career Clarity</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Market Research and Understanding Current Trends</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Develop Your Expertise</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Network Effectively</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Create High-Quality Content</li>
                </h5>
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <h5>
                  <li>Create a Compelling Personal Brand Story</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Build a Strong Online Presence</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Build Trust and Credibility</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Leverage Your Unique Selling Proposition (USP)</li>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <li>Measure and Analyze Your Progress</li>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 py-5 w-100">
          <h1 className="text-white mb-5">
            <span className="text-danger">Frequently</span> Asked Questions
          </h1>
          <Accordion defaultActiveKey="0" className="w-100">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is this session in Hindi?</Accordion.Header>
              <Accordion.Body>
                The session will be in Hindi and Easy English
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Will I have a clear roadmap for my career after the session?
              </Accordion.Header>
              <Accordion.Body>100%</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Is it live or recorded?</Accordion.Header>
              <Accordion.Body>It is live session </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Can I get personal attention?</Accordion.Header>
              <Accordion.Body>Depend on the schedule</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                I have enrolled but I did not get any update.
              </Accordion.Header>
              <Accordion.Body>You will be communicated shortly </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Row className="mt-5">
            <div className="text-center">
              <Button className="btn custom-btn">ENROL NOW ₹ 199</Button>
            </div>
          </Row>
          <Row className="mt-3 text-center">
            <h5 className="text-white">
              Only for those who are SERIOUS about career
            </h5>
          </Row>
          <Row>
            <Container
              fluid
              className="d-flex justify-content-center align-items-center"
            >
              <Row>
                <Col className="col-box column">
                  <div className="timer text-center">
                    {formatTime(time)} <br /> Min : Sec
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Landing;
