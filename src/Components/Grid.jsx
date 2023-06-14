import { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { Edit, Link, Check, X, Search, Plus} from "react-feather";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Label,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

const Grid = () => {
  const columns = [
    {
      name: "Sosyal Medya Linki",
      selector: (row) => row.link,
      sorTable: true,
      sortColumn: name,
      width: "10%",
    },
    {
      name: "Sosyal Medya Adı",
      selector: (row) => row.name,
    },
    {
      name: "Açıklama",
      selector: (row) => row.describe,
    },
  ];

  const data = [
    {
      link: 1,
      name: "Tunahan",
      describe: "tunahan@gmail.com",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <>
      <Fragment>
        <Card className="mt-4 m-3" style={{
          width: "1885px", height: "770px",
          background: "linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)",
          borderRadius: "6px"
        }}>
          <Row className="mx-4 px-5 mt-5">
            <Col sm="6">
              <div className="d-flex align-items-end gap-1 ">
                <div className="d-flex align-items-center">
                  <Label className="me-1" for="search-input"></Label>
                  <Input
                    className="dataTable-filter px-4"
                    type="text"
                    bsSize="sm"
                    id="search-input"
                    placeholder="Search Objects.."
                    style={{
                      borderTopLeftRadius: "9999px",
                      borderBottomLeftRadius: "9999px",
                      width: "308px",
                      height: "42px",
                    }} // Input kısmının solunu yuvarlak yaptık
                    // value={searchValue}
                    // onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <Button
                  id="search-button"
                  color="primary"
                  size="sm"
                  style={{ width: "45px", height: "42px" }}
                >
                  <Search size={15} />
                </Button>
                <Button
                  id="add-button"
                  color="primary"
                  size="sm"
                  style={{ width: "175px", height: "42px" }}
                >
                  <Plus size={15} />
                  <span>Yeni Hesap Ekle</span>
                </Button>
              </div>
            </Col>
          </Row>
          <div className="react-dataTable p-2 mx-5 px-5">
            <DataTable
              noHeader
              pagination
              paginationServer
              columns={columns}
              data={data}
              className="react-dataTable grid-title"
            ></DataTable>
          </div>
          <Col
            className="d-flex align-items-center justify-content-sm-end mt-sm-0 m-5"
            sm="1"
          >
            <div className="d-flex align-items-center">
              <Label for="sort-select">Show</Label>
              <Input
                className="dataTable-select m-2"
                type="select"
                id="sort-select"
                value={rowsPerPage}
                onChange={(e) => handlePerPage(e)}
              >
                <option value={10}>4 rows</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for="sort-select"></Label>
            </div>
          </Col>
        </Card>
      </Fragment>
    </>
  );
};

export default Grid;
