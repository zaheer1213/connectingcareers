import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Section from "./Section";
import Footer from "./Footer";
import axios from "axios";
import { BASEURL } from "./Comman";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Blogs = () => {
  const navigate = useNavigate();
  const [allBlogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const getAllBlogs = async () => {
    try {
      const resposse = await axios.get(`${BASEURL}/courses/blog`);

      if (resposse) {
        setBlogs(resposse.data.rows);
        setPageCount(resposse.pages_count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const moveToBlog = (id) => {
    navigate("/PerticularBlogs", { state: { blogId: id } });
  };
  useEffect(() => {
    getAllBlogs();
  }, [pageCount]);
  return (
    <>
      <Navbar />
      <Container className="">
        <div className="py-5 mt-3">
          <h1 className="hading">
            <span style={{ color: "red" }}>B</span>logs{" "}
          </h1>
          <div className="building-strong-connections">
            Comprehensive Modules Designed to Equip You with Industry-Ready
            Skills
          </div>
        </div>
        <Row>
          {allBlogs &&
            allBlogs.map((row) => (
              <Col md={4} className="mb-3">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage src={BASEURL + row.image} fluid alt="..." />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{row.title}</MDBCardTitle>
                    <MDBCardText>{row.blog_summary}</MDBCardText>
                    <MDBBtn
                      className="btn custom-btn"
                      onClick={() => moveToBlog(row.id)}
                    >
                      Read More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            ))}
          <div className="d-flex justify-content-center py-5">
            <Stack spacing={2}>
              <Pagination count={pageCount} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        </Row>
      </Container>
      <Section />
      <Footer />
    </>
  );
};

export default Blogs;
