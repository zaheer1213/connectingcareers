import React from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer";

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <div className="section-heading">
            <h2>Refund Policy</h2>
          </div>
        </Row>
        <Container>
          <Row>
            <div className="section-text">
              <h5>Service Refunds:</h5>
              <p>
                All service purchases are final and non-refundable. Once a
                service has been booked and payment has been processed, no
                refunds will be provided. We work diligently to ensure that our
                services meet the highest standards, and we are committed to
                resolving any issues that may arise to your satisfaction.
              </p>
              <h5>Digital Product Refunds:</h5>
              <p>
                Similarly, all digital product purchases are final and
                non-refundable. Once a digital product has been purchased and
                delivered, no refunds will be issued. We provide detailed
                descriptions and previews of our digital products to help you
                make an informed decision before purchasing.
              </p>
              <h5>Contact Us:</h5>
              <p>
                If you have any questions or concerns about our Refund Policy,
                please feel free to contact us at hello@connectingdotsbs.com or
                call us at 9822555146. We're here to assist you and address any
                inquiries you may have.
              </p>
            </div>
          </Row>
        </Container>
      </Container>
      <Section />
      <Footer />
    </>
  );
};

export default RefundPolicy;
