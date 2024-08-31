import React from "react";
import "./Section.css";
import { Button } from "react-bootstrap";

const Section = ({
  heroRef,
  placementRef,
  directorRef,
  courseRef,
  whyChooseUsRef,
  reviewsRef,
  sectionRef,
}) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="section">
      <div className="container">
        <div className="content2">
          <div className="logo-and-supporting-text">
            <img
              className="connecting-careers-final-logo-1"
              alt=""
              src="/connecting-careers-final-logo04-1@2x.png"
            />
            <div className="supporting-text">
              Office No. 105, The Core Business Center, Lane Number 21, NIBM,
              Kondhwa, Pune, Maharashtra 411048
            </div>
            <div>Call On: 9822666114</div>
            <div>
              <div>
                <a
                  href="https://wa.me/9822666114?text=Hello, I'm interested."
                  target="_blank"
                >
                  <Button
                    className="btn custom-btn"
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="footer-links-column">
              <div className="heading" style={{ color: "gray" }}>
                Quick Links
              </div>
              <div className="footer-links">
                <div className="footer-link">
                  <div
                    className="button1"
                    onClick={() => scrollToSection(heroRef)}
                  >
                    <div className="button-base">
                      <div className="text">Overview</div>
                    </div>
                  </div>
                </div>
                <div className="footer-link1">
                  <div
                    className="button1"
                    onClick={() => scrollToSection(placementRef)}
                  >
                    <div className="button-base">
                      <div className="text">Placement</div>
                    </div>
                  </div>
                </div>
                <div className="footer-link2">
                  <div
                    className="button1"
                    onClick={() => scrollToSection(courseRef)}
                  >
                    <div className="button-base">
                      <div className="text">Courses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-links-column">
              <div className="heading" style={{ color: "gray" }}>
                Useful Links
              </div>
              <div className="footer-links">
                <div className="footer-link">
                  <div
                    className="button1"
                    onClick={() => scrollToSection(directorRef)}
                  >
                    <div className="button-base">
                      <div className="text">About us</div>
                    </div>
                  </div>
                </div>
                <div className="footer-link">
                  <div
                    className="button1"
                    onClick={() => scrollToSection(reviewsRef)}
                  >
                    <div className="button-base">
                      <div className="text">Placement Partners</div>
                    </div>
                  </div>
                </div>
                <div className="footer-link">
                  <div
                    className="button1"
                    onClick={() => scrollToSection(sectionRef)}
                  >
                    <div className="button-base">
                      <div className="text">Course Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
