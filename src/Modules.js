import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Modules.css";

const Modules = () => {
  const moduleData = [
    { number: "01", title: "Communication and Presentation Skills" },
    { number: "02", title: "Social Media Marketing" },
    { number: "03", title: "Paid Advertising" },
    { number: "04", title: "Programmatic Advertising" },
    { number: "05", title: "Online Reputation Management" },
    { number: "06", title: "SEO" },
    { number: "07", title: "Content Writing" },
    { number: "08", title: "Content Marketing" },
    { number: "09", title: "Email Marketing" },
    { number: "10", title: "Performance Marketing" },
    { number: "11", title: "Basics of Photography" },
    { number: "12", title: "Basics of Videography" },
    { number: "13", title: "Fundamentals of Graphic Design" },
    { number: "14", title: "Google My Business Marketing" },
    { number: "15", title: "Fundamentals of Website Design" },
    { number: "16", title: "Blog and Vlog Marketing" },
    { number: "17", title: "Review Management System" },
    { number: "18", title: "Capstone Project and Certification" },
    { number: "19", title: "Interview Techniques and Guidance" },
  ];

  const rows = [];
  for (let i = 0; i < moduleData.length; i += 3) {
    rows.push(moduleData.slice(i, i + 3));
  }

  return (
    <Container className="py-5">
      <div className="headingmodle">
        <h2>COURSE MODULES</h2>
      </div>
      {rows.map((row, rowIndex) => (
        <Row className="mt-5" key={rowIndex}>
          {row.map((module, index) => (
            <Col key={index} className="customeline">
              <div className="number">
                <h4>{module.number}</h4>
              </div>
              <div className="cutomerow">
                <small>{module.title}</small>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Modules;
