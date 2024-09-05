import React, { useEffect, useState } from "react";
import { BASEURL } from "../../Comman";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { Pagination, Stack } from "@mui/material";
import moment from "moment";
import Loader from "../../Loader";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const Navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [allConatactus, setAllConatactus] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllContact = async () => {
    try {
      const respose = await axios.get(
        `${BASEURL}/courses/blog?page=1&limit=10`
      );
      if (respose) {
        const dataWithSr = respose.data.rows.map((item, index) => ({
          ...item,
          sr: (page - 1) * limit + index + 1,
        }));
        setAllConatactus(dataWithSr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenDelete = (id) => {
    setId(id);
    setShow(true);
    setMessage("Are you sure you want to delete?");
  };
  const columnDefs = [
    {
      headerName: "Sr No",
      field: "sr",
      sortable: true,
      filter: true,
      editable: false,
    },
    {
      headerName: "Title",
      field: "title",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Author",
      field: "author",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Published Date",
      field: "published_date",
      sortable: true,
      filter: true,
      editable: true,
      cellRenderer: (params) => {
        return moment(params).format("YYYY-MM-DD");
      },
    },
    {
      headerName: "Image",
      field: "image",
      sortable: true,
      filter: true,
      editable: true,
      cellRenderer: (params) => {
        return (
          <>
            <img
              src={BASEURL + params.data.image}
              alt="image"
              style={{ height: "100px", width: "100px" }}
            />
          </>
        );
      },
    },
    {
      headerName: "Desciption",
      field: "content",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: (params) => (
        <>
          <FontAwesomeIcon
            icon={faPenToSquare}
            title="Edit"
            className="pointer"
            onClick={() => editblog(params.value)}
          />
          &nbsp;&nbsp;
          <FontAwesomeIcon
            icon={faTrashCan}
            title="Delete"
            onClick={() => handleOpenDelete(params.value)}
            className="pointer"
            style={{ color: "red" }}
          />
        </>
      ),
    },
  ];

  const editblog = (id) => {
    Navigate("/admin-addblogs", { state: id });
  };
  const defaultColDef = {
    flex: 1,
    minWidth: 150,
    resizable: true,
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClose1 = () => {
    setShow1(false);
  };

  const handleDelete = async () => {
    handleClose();
    setLoading(true);
    try {
      const response = await axios.delete(`${BASEURL}/courses/blog/${id}`);
      setLoading(false);
      if (response.data) {
        setMessage("Blog deleted successfully");
        setShow1(true);
        getAllContact();
      }
    } catch (error) {
      setShow(false);
      setMessage("Something went wrong.");
      setShow1(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllContact();
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Container fluid>
        <Container className="heading-container">
          <div>
            <h1>Manage All Blogs</h1>
            <p>
              Here you can manage all your Blogs. Add new Blogs, edit existing
              details, or remove Blogs from your list.
            </p>
          </div>
          <Row className="align-items-center my-3 mt-5 w-100">
            <Col>
              <h2 className="table-heading">All Blogs</h2>
            </Col>
            <Col className="text-end">
              <Button
                style={{ background: "red" }}
                onClick={() => Navigate("/admin-addblogs")}
              >
                Add Blog &nbsp; <FontAwesomeIcon icon={faUserPlus} />
              </Button>
            </Col>
          </Row>

          <div
            className="ag-theme-alpine"
            style={{ height: 600, width: "100%" }}
          >
            <AgGridReact
              rowData={allConatactus}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={false}
              paginationPageSize={limit}
              rowSelection="multiple"
            />
          </div>
        </Container>
        <div className="mt-4 d-flex justify-content-center align-item-center">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              className="custom-pagination"
            />
          </Stack>
        </div>
      </Container>

      {/* Delete Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button style={{ background: "red" }} onClick={handleDelete}>
            Ok
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Blogs;
