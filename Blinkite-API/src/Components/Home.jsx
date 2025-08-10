import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync } from "../Services/Actions/productAction";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import bannerImage from "../assets/banner.jpg";
import './Home.css'
import ProductCard from "./ProductCard";
import RollingPaperTobacco from "./products";




const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
  };

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, []);

  return (
    <>
      <div>
        <img
          src={bannerImage}
          alt="Banner"
          style={{ width: "100%", objectFit: "cover", marginBottom: "30px" }}
        />
      </div>

      <Container>
     

<ProductCard/>
<RollingPaperTobacco/>


        <h2 className="mb-4 text-center fw-bold text-success">All Products</h2>

        {isLoading ? (
          <div className="text-center text-success">
            <Spinner animation="border" />
          </div>
        ) : (
 <Row xs={1} sm={2} md={3} lg={4} className="g-4">
  {products.map((prod) => (
    <Col key={prod.id}>
      <Card className="product-card shadow-sm">
        <Card.Img
          variant="top"
          src={prod.image}
          height="160"
          style={{ objectFit: "contain", padding: "10px" }}
        />
        <Card.Body className="py-2">
          <Card.Title className="fw-bold fs-6">{prod.title}</Card.Title>
          <Card.Text className="text-muted small">{prod.desc}</Card.Text>
          <p className="mb-1">
            <strong>₹{prod.price}</strong>
          </p>
          <p className="mb-0 text-secondary">{prod.category}</p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between bg-white border-0 pt-2">
          <Button className="edit-btn" size="sm" onClick={() => handleEdit(prod.id)}>
            Edit
          </Button>
          <Button className="delete-btn" size="sm" onClick={() => handleDelete(prod.id)}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>

        )}
      </Container>
    </>
  );
};

export default Home;
