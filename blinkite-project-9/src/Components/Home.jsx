import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct,getAllProductAsync,} from "../Services/Actions/productAction";
import {Button,Card,Col,Container,Row,Spinner,Form,InputGroup,} from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import banner from "../assets/banner.jpg";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = () => {
    const lowerSearch = search.toLowerCase();
    const filtered = products.filter(
      (prod) =>
        prod.title.toLowerCase().includes(lowerSearch) ||
        prod.category.toLowerCase().includes(lowerSearch) ||
        String(prod.price).includes(lowerSearch)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <>
          <img src={banner} alt="banner" className="banner-img" />

          
          <Container className="mt-4">
            <Form
              className="d-flex justify-content-center mb-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="search-wrapper">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by title, category or price..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="button" className="search-btn" onClick={handleSearch}>
                  <IoIosSearch />
                </button>
              </div>
            </Form>
          </Container>

          {/* 🛍 Product Cards */}
          <Container className="mt-3">
            <Row className="g-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((prod) => (
                  <Col key={prod.id} sm={12} md={6} lg={4}>
                    <Card className="product-card h-100 shadow-sm border-0">
                      <Card.Img
                        variant="top"
                        src={prod.image}
                        className="product-img"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="fw-bold fs-5">
                          {prod.title}
                        </Card.Title>
                        <Card.Text className="mb-1 text-muted">
                          {prod.desc}
                        </Card.Text>
                        <Card.Text className="mb-2">
                          <strong>Category:</strong> {prod.category}
                        </Card.Text>
                        <Card.Text>
                          <strong>Price:</strong> ₹{prod.price}
                        </Card.Text>
                        <div className="mt-auto d-flex justify-content-between pt-3">
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() => handleEdit(prod.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDelete(prod.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <div className="text-center mt-4"> </div>
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
