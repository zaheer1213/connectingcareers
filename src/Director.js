import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Director.css"; // Create a new CSS file for styling

const Director = () => {
  return (
    <>
      <Container fluid className="director-section">
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
              <h2 className="director-heading">
                Transform Your Career with an Industry-Oriented Practical
                Classroom Digital Marketing Program
              </h2>
              <p className="para">
                Many students get frustrated because the curriculum doesn't
                include the latest industry trends and tools. They also find it
                hard to understand complex concepts because the traditional
                course structure focuses more on theory and offers little or no
                practical experience.
              </p>
              <p className="para mb-5">
                Hello! My name is Immi Inamdar, a digital marketing expert. I
                have 16 years of marketing experience and 13 years of digital
                marketing experience. Here is the perfect solution for you. We
                offer you an industry-oriented professional digital marketing
                program. offering 160 hours of training with{" "}
                <span className="red">80% practical </span>
                exposure and <span className="red">20% theory</span> exposure.
                Benefit from our industry-expert faculty,{" "}
                <span className="red">100% placement</span> support, internship
                opportunities, and flexible EMI options. Limited to 26 seats,
                weekend batches are available.
              </p>
              <div className="">
                <strong>Mr. Immi Inamdar</strong>
                <p>Director - Connecting Dots</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Director;
