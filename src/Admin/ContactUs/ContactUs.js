import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import "./ContactUs.css";
import { Pagination, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { BASEURL } from "../../Comman";
import Loader from "../../Loader";

const ContactUs = () => {
  const [limit, setLimit] = useState(10);
  const [allConatactus, setAllConatactus] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);

  const getAllContact = async () => {
    try {
      const respose = await axios.get(
        `${BASEURL}/courses/contact?page=1&limit=10`
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
  const columnDefs = [
    {
      headerName: "Sr No",
      field: "sr",
      sortable: true,
      filter: true,
      editable: false,
    },
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Email",
      field: "email",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Interested In",
      field: "interested_in",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Contact No",
      field: "contact_no",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Profession",
      field: "profession",
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
  const defaultColDef = {
    flex: 1,
    minWidth: 150,
    resizable: true,
  };
  const handleOpenDelete = (id) => {
    setId(id);
    setShow(true);
    setMessage("Are you sure you want to delete?");
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
      const response = await axios.delete(`${BASEURL}/courses/contact/${id}`);
      setLoading(false);
      if (response.data) {
        setMessage("Contact deleted successfully");
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
            <h1>Manage All Contacts</h1>
            <p>
              Here you can manage all your Contacts. Add new Contacts, edit
              existing details, or remove Contacts from your list.
            </p>
          </div>

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

export default ContactUs;
