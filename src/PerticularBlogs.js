import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "./Comman";
import moment from "moment";

const PerticularBlogs = () => {
  const location = useLocation();
  const [resposeData, setResposeData] = useState({});

  const getBlogById = async (id) => {
    try {
      const respose = await axios.get(`${BASEURL}/courses/blog/${id}`);
      if (respose) {
        setResposeData(respose.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const id = location.state.blogId;
    if (id) {
      getBlogById(id);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Container className="py-5 mt-3">
        <Row>
          <Col>
            <MDBCard className="mb-3">
              <MDBCardImage
                position="top"
                src={BASEURL + resposeData?.image}
                alt="img"
              />
              <MDBCardBody>
                <MDBCardTitle>{resposeData?.title}</MDBCardTitle>
                <MDBCardText>{resposeData?.blog_summary}</MDBCardText>
                <MDBCardTitle>{resposeData?.slug}</MDBCardTitle>
                <MDBCardText>{resposeData?.content}</MDBCardText>
                <MDBCardText>
                  <small className="text-muted">
                    {moment(resposeData?.updated_date).format("YYYY-MM-DD")}
                  </small>{" "}
                  &nbsp;&nbsp;
                  <small>Author : {resposeData?.author} </small>
                  {resposeData?.linkedin_url ? (
                    <small>
                      Url :{" "}
                      <a href={resposeData?.linkedin_url}>
                        {resposeData?.linkedin_url}
                      </a>{" "}
                    </small>
                  ) : (
                    ""
                  )}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </Container>
      <Section />
      <Footer />
    </>
  );
};

export default PerticularBlogs;
