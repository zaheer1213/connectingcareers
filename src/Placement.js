import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Placement.css";

const Placement = () => {
  return (
    <>
      <Container fluid className="palcemet-conatiner">
        <Row>
          <div>
            <h1 className="hading">
              <span style={{ color: "red" }}>P</span>lacement{" "}
              <span style={{ color: "red" }}>P</span>artners
            </h1>
            <div className="building-strong-connections">
              Building Strong Connections with Top Industry Employers for Your
              Success
            </div>
          </div>
          <div className="frame-wrapper mt-3">
            <Row>
              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="esy-ev-social-media-2-icon"
                  alt=""
                  src="/01esy-ev-social-media-2@2x.png"
                />
              </div>

              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="cd-logo-final-01"
                  alt=""
                  src="/image-171@2x.png"
                />
              </div>
              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="cd-logo-final-01"
                  alt=""
                  src="/cd-logo-final01@2x.png"
                />
              </div>
              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="image-17-icon2"
                  alt=""
                  src="/image-172@2x copy.png"
                />
              </div>
              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="esy-ev-social-media-2-icon1"
                  alt=""
                  src="/01esy-ev-social-media-21@2x.png"
                />
              </div>
              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="esy-ev-social-media-2-icon2"
                  alt=""
                  src="/01esy-ev-social-media-22@2x.png"
                />
              </div>
              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="esy-ev-social-media-2-icon2"
                  alt=""
                  src="/ProcessLogix.png"
                />
              </div>
              <div className="esy-ev-social-media-2-wrapper">
                <img
                  className="esy-ev-social-media-2-icon2"
                  alt=""
                  src="/convex.jpeg"
                />
              </div>
              <div
                className="esy-ev-social-media-2-wrapper"
                style={{ marginLeft: "100px" }}
              >
                <img className="image-17-icon" alt="" src="/image-17@2x.png" />
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Placement;
