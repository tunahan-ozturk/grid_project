import { Fragment, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Edit, Link, Check, X, Search, Plus, Filter } from "react-feather";
import ReactPaginate from "react-paginate";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Grid = () => {
  // Tablonun başlık kısmı
  const columns = [
    {
      name: "Sosyal Medya Linki",
      selector: (row) => row.link,
      sortColumn: name,
      width: "33%",
      sortable: true, // Sıralama özelliği
      style: {
        textAlign: "center",
        color: "#000000",
      },
    },
    {
      name: "Sosyal Medya Adı",
      selector: (row) => row.name,
      sortable: true, // Sıralama
      style: {
        textAlign: "center",
      },
    },
    {
      name: "Açıklama",
      selector: (row) => row.describe,
      style: {
        textAlign: "center",
      },
    },
  ];

  const initialFormData = {
    link: "",
    name: "",
    describe: "",
  };

  const data = [
    // Tabloya girecek veriler - rows
    {
      link: "instagram.com/mobilerast/",
      name: "instagram",
      describe:
        "We'll help you to finish your development project successfully.",
    },
    {
      link: "tr.linkedin.com/company/rastmobile",
      name: "linkedin",
      describe:
        "Hire vetted developers from Rast Mobile to scale up your tech projects.",
    },
    {
      link: "behance.net/rastmobile",
      name: "behance",
      describe:
        "Software Development Agency Rast Mobile Information Technology Ltd.",
    },
    {
      link: "twitter.com/rastmobile",
      name: "twitter",
      describe:
        "Software Development Agency Rast Mobilke Information Technology Ltd.",
    },
  ];

  const [records, setRecords] = useState(data); // Tabloya girecek veriler - rows
  const [formData, setFormData] = useState(initialFormData); // Modal kısmındaki veriler
  const [modalOpen, setModalOpen] = useState(false); // Modal kısmının açılması. Kapalı olduğu için false

  function handleFilter(event) {
    // Filtreleme ve arama kısmı
    const searchTerm = event.target.value.toLowerCase();
    const storedRecords = localStorage.getItem("records");
    if (storedRecords) {
      const parsedRecords = JSON.parse(storedRecords);
      const filteredRecords = parsedRecords.filter((row) => {
        return row.name.toLowerCase().includes(searchTerm);
      });
      setRecords(filteredRecords);
    }
  }

  const handleFormInputChange = (event) => {
    // Modal kısmındaki verilerin değişmesi
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    const updatedRecords = [...records, formData];
    // Modal kısmındaki verilerin kaydedilmesi
    setRecords([...records, formData]);
    setFormData(initialFormData);
    setModalOpen(false);
    localStorage.setItem("records", JSON.stringify(updatedRecords));
  };

  const toggleModal = () => {
    // Modal kısmının açılması
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    // Local Storage'da kaydedilmiş verileri alıp kontrol ediyoruz
    const storedRecords = localStorage.getItem("records");
    if (storedRecords) {
      const parsedRecords = JSON.parse(storedRecords);
      setRecords(parsedRecords);
    }

    setLoading(false);
  }, []);

  console.log(records);

  const handlePerPage = (e) => {
    const value = parseInt(e.target.value);
    setRowsPerPage(value);
    setCurrentPage(1);
    // setCurrentPage(1)
  };

  const dataToRender = () => {
    const lastIndex = currentPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    const currentRows = records.slice(firstIndex, lastIndex);
    return currentRows;
  };

  const handlePagination = (page) => {
    setCurrentPage(page.selected + 1);
  };

  const CustomPagination = () => {
    return (
      <ReactPaginate
        previousLabel={<ChevronLeft size={15} />}
        nextLabel={<ChevronRight size={15} />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(records.length / rowsPerPage - 1)}
        containerClassName={
          "vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2"
        }
        activeClassName={"active"}
        forcePage={currentPage !== 0 ? currentPage - 1 : currentPage}
        onPageChange={(page) => handlePagination(page)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
      />
    );
  };

  const [loading, setLoading] = useState(true); // Loading kısmı
  const [currentPage, setCurrentPage] = useState(1); // Sayfa numarası
  const [rowsPerPage, setRowsPerPage] = useState(4); // Sayfadaki satır sayısı
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = records.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

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
                    onChange={handleFilter}
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
                  onChange={handleFilter}
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
                  onClick={toggleModal}
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
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                  <ModalBody
                    style={{
                      width: "488px",
                      height: "406px",
                      borderRadius: "13px",
                      background: "#FFFFFF",
                    }}
                    className="ms-auto pt-5 px-4"
                  >
                    <Label
                      style={{
                        color: "#06163A",
                        lineHeight: "20px",
                        fontStyle: "normal",
                      }}
                    >
                      Sosyal Medya Linki
                    </Label>
                    <Input
                      type="text"
                      name="link"
                      value={formData.link}
                      onChange={handleFormInputChange}
                      style={{
                        boxSizing: "border-box",
                        width: "424px",
                        height: "40px",
                        border: "1px solid #D9D9D9",
                        borderRadius: "38px",
                      }}
                      className="mb-4"
                    />
                    <Label
                      style={{
                        color: "#06163A",
                        lineHeight: "20px",
                        fontStyle: "normal",
                      }}
                    >
                      Sosyal Medya Adı
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormInputChange}
                      style={{
                        boxSizing: "border-box",
                        width: "424px",
                        height: "40px",
                        border: "1px solid #D9D9D9",
                        borderRadius: "38px",
                      }}
                      className="mb-4"
                    />
                    <Label
                      style={{
                        color: "#06163A",
                        lineHeight: "20px",
                        fontStyle: "normal",
                      }}
                    >
                      Açıklama
                    </Label>
                    <Input
                      type="text"
                      name="describe"
                      value={formData.describe}
                      onChange={handleFormInputChange}
                      style={{
                        boxSizing: "border-box",
                        width: "424px",
                        height: "40px",
                        border: "1px solid #D9D9D9",
                        borderRadius: "38px",
                      }}
                    />
                  </ModalBody>
                  <ModalFooter className="px-4">
                    <Button
                      color="secondary"
                      onClick={toggleModal}
                      style={{
                        color: "#744BFC",
                        background: "#F5F7FF",
                        borderRadius: "34px",
                        marginRight: "16px",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      Vazgeç
                    </Button>{" "}
                    <Button
                      color="primary"
                      onClick={handleFormSubmit}
                      style={{
                        color: "#FFFFFF",
                        background: "#744BFC",
                        borderRadius: "34px",
                        marginRight: "5px",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      Kaydet
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </Col>
          </Row>

          <div
            className="react-dataTable p-2 mx-5 px-5 pt-3"
            style={{ overflowX: "auto" }}
          >
            <DataTable
              noHeader
              pagination
              paginationServer
              columns={columns}
              responsive
              data={dataToRender()}
              paginationPerPage={rowsPerPage}
              onChangePerPage={rowsPerPage}
              paginationRowsPerPageOptions={[5, 10, 25, 50]}
              paginationTotalRows={data.length}
              // Toplam veri sayısı
              fixedHeader // Başlığın sabit kalması için.
              // selectableRows  // Seçme özelliği istersek aktifleştirebiliriz.
              className="react-dataTable grid-title"
            />
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
                  container: {
                    border: "1px solid #CFC0FF",
                    borderRadius: "39px",
                  },
                  textAlign: "center",
                  color: "#000000",
                  padding: "2px",
                }}
                type="select"
                id="sort-select"
                value={rowsPerPage}
                onChange={handlePerPage}
              >
                <option value={4}>4</option>
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
