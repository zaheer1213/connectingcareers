import React, { useEffect, useState } from "react";
import { BASEURL } from "../../Comman";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { Pagination, Stack } from "@mui/material";
import moment from "moment";

const Blogs = () => {
  const [limit, setLimit] = useState(10);
  const [allConatactus, setAllConatactus] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
            // onClick={() => editService(params.value)}
          />
          &nbsp;&nbsp;
          <FontAwesomeIcon
            icon={faTrashCan}
            title="Delete"
            // onClick={() => handleOpenDelete(params.value)}
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
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    getAllContact();
  }, []);
  return (
    <>
      <Container fluid>
        <Container className="heading-container">
          <div>
            <h1>Manage All Blogs</h1>
            <p>
              Here you can manage all your Blogs. Add new Blogs, edit existing
              details, or remove Blogs from your list.
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
    </>
  );
};

export default Blogs;
