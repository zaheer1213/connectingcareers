import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Hero.css";
import ContactModal from "./ContactModal";
import Navbar from "./Navbar";
import Placement from "./Placement";
import Director from "./Director";
import Course from "./Course";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from "./Reviews";
import Section from "./Section";
import Footer from "./Footer";

const Hero = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const placementRef = useRef(null);
  const directorRef = useRef(null);
  const courseRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const reviewsRef = useRef(null);
  const sectionRef = useRef(null);

  const keywords = [
    "Growing Influencers",
    "Students",
    "Business owners",
    "Startup owners",
    "Working Professionals",
    "Celebrities",
  ];
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    // Step 3: Set up an interval to change the keyword every 3 seconds (3000 ms)
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prevIndex) =>
        prevIndex === keywords.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [keywords.length]);
  return (
    <>
      <Navbar />
      <Container fluid className="content">
        <Row>
          <div className="transform-your-career1">
            Transform your career into digital marketing
          </div>
        </Row>
        <Row className="who-can-parent">
          <div className="who-can">
            {`Who can`} I{" "}
            <span style={{ color: "red" }}>
              {keywords[currentKeywordIndex]}
            </span>
          </div>
        </Row>
        {/* <div>
        <Button className="btn custom-btn" onClick={() => setModalShow(true)}>
          Apply Now
        </Button>

        <ContactModal
          show={modalShow}
          handleClose={() => setModalShow(false)}
        />
      </div> */}
        <div>
          <a
            href="https://wa.me/9822666114?text=Hello, I'm interested."
            target="_blank"
          >
            <Button className="btn custom-btn">Apply Now</Button>
          </a>
        </div>
        <Row className="mt-5">
          <div className="">
            <video controls autoPlay loop className="ccvideo">
              <source src="/ccvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Row>
      </Container>
      <div ref={placementRef}>
        <Placement />
      </div>
      <div ref={directorRef}>
        <Director />
      </div>
      <div ref={courseRef}>
        <Course />
      </div>
      <div ref={whyChooseUsRef}>
        <WhyChooseUs />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <div ref={sectionRef}>
        <Section
          heroRef={heroRef}
          placementRef={placementRef}
          directorRef={directorRef}
          courseRef={courseRef}
          whyChooseUsRef={whyChooseUsRef}
          reviewsRef={reviewsRef}
          sectionRef={sectionRef}
        />
      </div>
      <Footer />
    </>
  );
};

export default Hero;
