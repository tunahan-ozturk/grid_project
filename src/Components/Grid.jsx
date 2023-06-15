import { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { Edit, Link, Check, X, Search, Plus, Filter } from "react-feather";
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
  // Tablonun başlık kısmı
  const columns = [
    {
      name: "Sosyal Medya Linki",
      selector: (row) => row.link,
      sortColumn: name,
      width: "10%",
      sortable: true, // Sıralama özelliği
    },
    {
      name: "Sosyal Medya Adı",
      selector: (row) => row.name,
      sortable: true, // Sıralama
    },
    {
      name: "Açıklama",
      selector: (row) => row.describe,
    },
  ];

  const data = [
    // Tabloya girecek veriler - rows
    {
      link: 1,
      name: "Tunahan",
      describe: "tunahan@gmail.com",
    },
    {
      link: 2,
      name: "Zehra",
      describe: "zehra@gmail.com",
    },
    {
      link: 3,
      name: "Eren",
      describe: "eren@gmail.com",
    },
    {
      link: 4,
      name: "Hasan",
      describe: "hasan@gmail.com",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <>
      <Fragment>
        <Card
          className="mt-4 m-3" // Ortadaki kutunun özellikleri
          style={{
            width: "1885px",
            height: "770px",
            background:
              "linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)",
            borderRadius: "6px",
            boxShadow: "none",
          }}
        >
          <Row className="mx-4 px-5 mt-5">
            <Col sm="6">
              <div className="d-flex align-items-end">
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
                  id="search-button" // Arama butonu
                  size="sm"
                  style={{
                    borderTopRightRadius: "9999px",
                    borderBottomRightRadius: "9999px",
                    width: "45px",
                    height: "42px",
                  }}
                >
                  <Search size={15} />
                </Button>

                <Button 
                  id="filter-button" // Filtreleme butonu
                  size="sm"
                  className="ms-2"
                  style={{
                    borderRadius: "29px",
                    borderTopRightRadius: "9999px",
                    borderBottomRightRadius: "9999px",
                    borderBottomLeftRadius: "9999px",
                    borderTopLeftRadius: "9999px",
                    width: "49px",
                    height: "42px",
                    background: "#FFFFFF",
                    color: "#744BFC",
                    boxShadow: "none",
                    border: "none",
                  }}
                >
                  <Filter size={15} style={{ width: "18px", height: "18px" }} />
                </Button>

                <Button
                  id="add-button" // Hesap ekleme butonu
                  size="sm"
                  className="ms-auto"
                  style={{
                    marginRight: "-865px",
                    borderTopRightRadius: "9999px",
                    borderBottomRightRadius: "9999px",
                    borderBottomLeftRadius: "9999px",
                    borderTopLeftRadius: "9999px",
                    width: "175px",
                    height: "42px",
                  }}
                >
                  <Plus size={15} />

                  <span>Yeni Hesap Ekle</span>
                </Button>
              </div>
            </Col>
          </Row>
          <div className="react-dataTable p-2 mx-5 px-5 pt-3">
            <DataTable
              noHeader
              pagination
              paginationServer
              columns={columns}
              data={data}
              fixedHeader // Başlığın sabit kalması için.
              // selectableRows  // Seçme özelliği istersek aktifleştirebiliriz.
              className="react-dataTable grid-title"
            ></DataTable>
          </div>
          <Col
            className="d-flex align-items-center justify-content-sm-end mt-sm-0"
            style={{
              marginLeft: "-70px",
              paddingTop: "15px",
            }}
            sm="2"
          >
            <div className="d-flex align-items-center ">
              <Label for="sort-select" style={{ color: "#744BFC" }}>
                Show
              </Label>
              <Input
                className="dataTable-select m-2"
                style={{
                  width: "90px",
                  height: "37px",
                  borderRadius: "15px",
                  background: "#FFFFFF",
                  border: "1px solid #CFC0FF",
                  borderRadius: "39px",
                  textAlign: "center",
                  color: "#000000",
                  padding: "2px",
                }}
                type="select"
                id="sort-select"
                value={rowsPerPage}
                onChange={(e) => handlePerPage(e)}
              >
                <option value={10}>10</option>
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
