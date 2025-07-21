
import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/storageData";
import { Badge, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import '../App.css';

const Home = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  }

  const handleDelete = (id) => {
    let data = getStorageData();
    let updateData = data.filter(product => product.id != id)

    setStorageData(updateData);
    setProductData(updateData);
  }

  useEffect(() => {
    let data = getStorageData();
    setProductData(data);
  }, []);
  return (
    <>
 

<Container className="mt-5">
  <div className="row g-4">
    {productData.map((product) => (
      <div key={product.id} className="col-md-6 col-lg-4">
        <Card className="border-0 shadow rounded-4 card-hover h-100 d-flex flex-column">
          <Card.Img
            variant="top"
            src={product.image}
            className="rounded-top-4"
            style={{ height: "300px", objectFit: "cover" }}
          />

          <Card.Body className="d-flex flex-column">
            <div className="flex-grow-1">
              <Card.Title className="fw-bold fs-5">
                {product.title}{" "}
                <span className="text-muted small">#{product.id}</span>
              </Card.Title>

              <Card.Text
                    className="mb-2"
                    style={{ color: "#6c757d", fontSize: "0.95rem", fontWeight: "500" }}
                  >
                    <strong style={{ color: "#333" }}>Brand:</strong> {product.brand}
                  </Card.Text>

              <span
                    className="mb-3 d-inline-block"
                    style={{
                      backgroundColor: "#ffb347", 
                      color: "#fff",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "0.85rem",
                      fontWeight: "500"
                    }}
                  >
                    {product.category}
                </span>
            </div>

            <div className="d-flex justify-content-between mt-auto pt-3 me-4 ms-4">
              <Button
                style={{ backgroundColor: "#fc8eac", borderColor: "#fc8eac" }}
                size="sm"
                onClick={() => handleEdit(product.id)}
              >
                Edit
              </Button>
              <Button
                style={{ backgroundColor: "#A94064", borderColor: "#A94064" }}
                size="sm"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</Container>

    </>
  );
};

export default Home;
