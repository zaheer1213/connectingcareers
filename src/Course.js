import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Course.css";
import { Navigation, Pagination } from "swiper/modules";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "./Comman";

const Course = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [coursesdata, setAllCoursesData] = useState([]);

  const handleNav = () => {
    navigate("/allcourses");
    window.scroll(0, 0);
  };

  const getAllCourse = async () => {
    try {
      const respose = await axios.get(
        `${BASEURL}/courses/course-detail?page=${page}&limit=${limit}`
      );
      setAllCoursesData(respose.data.rows);
      console.log(respose.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <>
      <div className="py-5 mt-3">
        <h1 className="hading">
          <span style={{ color: "red" }}>C</span>ourse{" "}
          <span style={{ color: "red" }}>D</span>etails
        </h1>
        <div className="building-strong-connections">
          Comprehensive Modules Designed to Equip You with Industry-Ready Skills
        </div>
      </div>
      <Container fluid className="course-container">
        <Container>
          <div className="swiper-button-prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-5"
          >
            {coursesdata &&
              coursesdata.map((row) => (
                <SwiperSlide>
                  <div className="course-card">
                    <img
                      src="calender.png"
                      alt="Hovered Image"
                      className="hover-image"
                    />
                    <h4 className="course-normal-heading firstheading">
                      <span className="red">100%</span>
                      <span className="classroom-training1">
                        {" "}
                        classroom training
                      </span>
                    </h4>
                    <h2 className="course-big-heading">{row.course_name}</h2>
                    <p className="course-description">
                      {row.description} &nbsp;
                      <a
                        href="https://wa.me/9822666114?text=Hello, I'm interested."
                        className="apply-now-link"
                      >
                        Apply Now
                      </a>
                    </p>
                    <a
                      href="https://wa.me/9822666114?text=Hello, I'm interested."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="course-button">
                        <span className="original-price">
                          {row.course_name ==
                          "Professional Digital marketing Program for Business Owner"
                            ? "Rs 1,50,000/-"
                            : "Rs 1,00,000/-"}{" "}
                        </span>{" "}
                        <strong>Rs {row.course_fee} /-</strong>
                      </Button>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="swiper-button-next">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="button-container">
            <Button className="btn custom-btn" onClick={() => handleNav()}>
              View All Coursese
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Course;
