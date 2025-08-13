import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync } from "../Services/Actions/productAction";
import { Button, Card, Col, Container, Row, Spinner, Modal, Badge } from "react-bootstrap";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";
import { BsEye } from "react-icons/bs"; 
import { FaSearch, FaTimes, FaSort } from "react-icons/fa";
import bannerImage from "../assets/banner.jpg";
import "./Home.css";
import ProductCard from "./ProductCard";
import RollingPaperTobacco from "./products";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
  }, [itemOffset, filteredProducts]);

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
  };

  const handleSearch = () => {
    const lower = search.toLowerCase();
    const result = products.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.price.toString().includes(lower)
    );
    setFilteredProducts(result);
    setItemOffset(0);
  };

  const handleClearSearch = () => {
    setSearch("");
    setFilteredProducts(products);
    setItemOffset(0);
  };

  const handleSort = () => {
    if (!sortOption) return;
    const [field, direction] = sortOption.split(",");
    const sorted = [...filteredProducts].sort((a, b) => {
      if (field === "price") {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
      }
      return direction === "asc"
        ? a[field].localeCompare(b[field])
        : b[field].localeCompare(a[field]);
    });
    setFilteredProducts(sorted);
    setItemOffset(0);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  const handleView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
  
    <div
  className="search-sort-container d-flex flex-wrap gap-4 mb-4 mt-4 justify-content-center align-items-center p-3 rounded-4 shadow-sm"
  style={{ background: "linear-gradient(135deg, #e9fbe9, #f7fff7)" }}
>

  <div className="d-flex gap-2 align-items-center bg-white p-2 rounded-4 shadow-sm">
    <div className="position-relative">
      <FaSearch
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "#28a745",
        }}
      />
      <input
        type="text"
        placeholder="Search by title, category, or price"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control border-0 ps-5 rounded-4"
        style={{
          minWidth: "250px",
          background: "transparent",
          boxShadow: "none",
        }}
      />
    </div>
    <Button
      variant="success"
      className="rounded-4 px-3 d-flex align-items-center gap-2"
      onClick={handleSearch}
    >
      <FaSearch /> Search
    </Button>
    <Button
      variant="outline-success"
      className="rounded-4 px-3 d-flex align-items-center gap-2"
      onClick={handleClearSearch}
    >
      <FaTimes /> Clear
    </Button>
  </div>

  {/* Sort Section */}
  <div className="d-flex gap-2 align-items-center bg-white p-2 rounded-4 shadow-sm">
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="form-select border-0 rounded-4"
      style={{ minWidth: "200px" }}
    >
      <option value="">Sort By</option>
      <option value="title,asc">📄 Title ↑ (A-Z)</option>
      <option value="title,desc">📄 Title ↓ (Z-A)</option>
      <option value="price,asc">💰 Price ↑ (Low → High)</option>
      <option value="price,desc">💰 Price ↓ (High → Low)</option>
      <option value="category,asc">📂 Category ↑ (A-Z)</option>
      <option value="category,desc">📂 Category ↓ (Z-A)</option>
    </select>
    <Button
      variant="success"
      className="rounded-4 px-3 d-flex align-items-center gap-2"
      onClick={handleSort}
    >
      <FaSort /> Sort
    </Button>
  </div>
</div>

      <div style={{ marginBottom: "30px" }}>
        <img
          src={bannerImage}
          alt="Banner"
          style={{
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <Container>
        <ProductCard />
        <RollingPaperTobacco />

        <h2 className="mb-4 text-center fw-bold text-success">All Products</h2>

        {isLoading ? (
          <div className="text-center text-success">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {currentItems.map((prod) => (
                <Col key={prod.id}>
                  <Card className="product-card shadow-sm border-success">
                    <Card.Img
                      variant="top"
                      src={prod.image}
                      height="160"
                      style={{
                        objectFit: "contain",
                        padding: "10px",
                      }}
                    />
                    <Card.Body className="py-2">
                      <Card.Title className="fw-bold fs-6 text-success">
                        {prod.title}
                      </Card.Title>
                      <Card.Text className="text-muted small">
                        {prod.desc}
                      </Card.Text>
                      <p className="mb-1 text-success">
                        <strong>₹{prod.price}</strong>
                      </p>
                      <p className="mb-0 text-secondary">{prod.category}</p>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between bg-white border-0 pt-2">
                      <Button
                        variant="outline-success"
                        size="sm"
                        onClick={() => handleEdit(prod.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleDelete(prod.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="info"
                        size="sm"
                        className="view-btn"
                        onClick={() => handleView(prod)}
                        title="View Product"
                      >
                        <BsEye size={18} />
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>

       
            {pageCount > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next ›"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel="‹ Prev"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  activeClassName="active"
                />
              </div>
            )}
          </>
        )}
      </Container>


<Modal
  show={showModal}
  onHide={handleClose}
  centered
  size="lg"
  className="product-modal"
>
  <Modal.Header closeButton className="product-modal-header">
    <Modal.Title className="product-modal-title">
      <i className="fas fa-box me-2"></i> Product Details
    </Modal.Title>
  </Modal.Header>
  <Modal.Body className="p-4">
    {selectedProduct && (
      <div className="product-modal-container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center">
            <div className="product-modal-image-container">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-modal-info">
              <h2 className="product-modal-name fw-bold">{selectedProduct.title}</h2>
              <Badge pill bg="success" className="product-modal-category mb-3">
                {selectedProduct.category}
              </Badge>
              <h3 className="product-modal-price text-success fw-bold">
                ₹{selectedProduct.price}
              </h3>
              <div className="product-modal-description mt-3">
                <h5 className="fw-semibold">Description</h5>
                <p className="text-muted">{selectedProduct.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </Modal.Body>
</Modal>

    </>
  );
};

export default Home;
