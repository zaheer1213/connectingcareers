import React, { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button, Image } from "react-bootstrap";
import axios from "axios";
import { BASEURL } from "../../Comman";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const AddBlogs = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    author: "",
    content: "",
    blog_summary: "",
    image: null,
    published_date: "",
    linkedin_url: "",
  });
  const [id, setId] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [originalData, setOriginalData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (files) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.title = formData.title ? "" : "Title is required.";
    tempErrors.slug = formData.slug ? "" : "Slug is required.";
    tempErrors.author = formData.author ? "" : "Author is required.";
    tempErrors.content = formData.content ? "" : "Content is required.";
    tempErrors.blog_summary = formData.blog_summary
      ? ""
      : "Blog summary is required.";
    tempErrors.image = formData.image ? "" : "Image is required.";
    tempErrors.published_date = formData.published_date
      ? ""
      : "Published date is required.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const blogData = new FormData();

      if (id) {
        blogData.append("id", id);

        for (const key in formData) {
          if (formData[key] !== originalData[key]) {
            blogData.append(key, formData[key]);
          }
        }
        try {
          const response = await axios.put(
            `${BASEURL}/courses/blog/${id}`,
            blogData
          );
          if (response) {
            Navigate("/admin-blogs");
          }
        } catch (error) {
          console.error("Error updating the blog:", error);
        }
      } else {
        // New blog creation
        for (const key in formData) {
          blogData.append(key, formData[key]);
        }

        try {
          const response = await axios.post(
            `${BASEURL}/courses/blog`,
            blogData
          );
          if (response) {
            Navigate("/admin-blogs");
          }
        } catch (error) {
          console.error("Error submitting the blog:", error);
        }
      }
    }
  };

  const getBlogById = async (id) => {
    try {
      const respose = await axios.get(`${BASEURL}/courses/blog/${id}`);
      if (respose) {
        const AllData = respose.data.data;
        setFormData({
          title: AllData.title,
          slug: AllData.slug,
          author: AllData.author,
          content: AllData.content,
          blog_summary: AllData.blog_summary,
          image: AllData.image,
          published_date: moment(AllData.published_date).format("YYYY-MM-DD"),
          linkedin_url: AllData.linkedin_url,
        });
        setSelectedImage(BASEURL + AllData.image);
        setOriginalData(AllData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const blogId = location.state;
    setId(blogId);
    if (blogId) {
      getBlogById(blogId);
    }
  }, []);
  return (
    <Container className="">
      <div className="text-start">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          style={{ fontSize: "30px", marginBottom: "20px", cursor: "pointer" }}
          onClick={() => window.history.back()}
        />
      </div>
      <Row className="mb-4">
        <h2>{id ? "Edit" : "Add"} Blog</h2>
      </Row>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="slug">
              <Form.Label>Slug</Form.Label>
              <Form.Control
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                isInvalid={!!errors.slug}
              />
              <Form.Control.Feedback type="invalid">
                {errors.slug}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                isInvalid={!!errors.author}
              />
              <Form.Control.Feedback type="invalid">
                {errors.author}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="published_date">
              <Form.Label>Published Date</Form.Label>
              <Form.Control
                type="date"
                name="published_date"
                value={formData.published_date}
                onChange={handleChange}
                isInvalid={!!errors.published_date}
              />
              <Form.Control.Feedback type="invalid">
                {errors.published_date}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="content"
                value={formData.content}
                onChange={handleChange}
                isInvalid={!!errors.content}
              />
              <Form.Control.Feedback type="invalid">
                {errors.content}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="blog_summary">
              <Form.Label>Blog Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="blog_summary"
                value={formData.blog_summary}
                onChange={handleChange}
                isInvalid={!!errors.blog_summary}
              />
              <Form.Control.Feedback type="invalid">
                {errors.blog_summary}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
              {selectedImage && (
                <div className="mt-3">
                  <Image
                    src={selectedImage}
                    thumbnail
                    alt="Selected"
                    style={{ height: "150px", width: "150px" }}
                  />
                </div>
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="linkedin_url">
              <Form.Label>LinkedIn URL</Form.Label>
              <Form.Control
                type="url"
                name="linkedin_url"
                value={formData.linkedin_url}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="danger" type="submit" className="mt-4">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddBlogs;
