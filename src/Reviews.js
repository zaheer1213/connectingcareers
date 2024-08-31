import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      image: "/WhatsApp Image 2024-08-14 at 7.50.08 PM.jpeg",
      name: "Umair Shaikh",
      description:
        "Fantastic learning experience with expert trainers! Connecting Careers is the best digital marketing class in Pune. Thank you, team!",
      rating: 5,
    },
    {
      id: 2,
      image: "/WhatsApp Image 2024-08-14 at 7.51.47 PM.jpeg",
      name: "Siddhi Dhapodkar",
      description:
        "Great experience! Immi sir and the team are excellent. Thanks to their training and placement support. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      image: "/WhatsApp Image 2024-08-14 at 7.53.13 PM.jpeg",
      name: "Ganesh Thorat",
      description:
        "Had a fantastic time! The trainers are supportive and friendly. I'm now a digital marketing executive, thanks to Immi sir and the team. Thank you!.",
      rating: 5,
    },
  ];

  return (
    <Container className="reviews-container">
      <Row>
        <div className="mb-5">
          <h1 className="hading">
            <span style={{ color: "red" }}>R</span>eviews from &nbsp;
            <span style={{ color: "red" }}>S</span>tudents
          </h1>
          <div className="building-strong-connections">
            Hear What Our Alumni Say About Their Journey and Success
          </div>
        </div>
        {reviews.map((review) => (
          <Col key={review.id} lg={4} md={6} sm={12} className="mb-4">
            <Card className="review-card">
              <Card.Body>
                <div className="review-header">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-image"
                  />
                  <h5 className="review-name">{review.name}</h5>
                </div>
                <Card.Text className="review-description">
                  {review.description}
                </Card.Text>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, index) => (
                    <img
                      key={index}
                      src="/star-1.svg"
                      alt="Star"
                      className="star-icon"
                    />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
