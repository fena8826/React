
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
   <div>
       <img src="https://tse3.mm.bing.net/th/id/OIP.i_PQTGQ3itP6azrtTXMbygHaDj?pid=Api&P=0&h=180" style={{  height:"400px" }} className="  nykaa-banner mt-5"/>
   </div>

<Container className="mt-5">
  <div className="row g-4">
    {productData.map((product) => (
      <div key={product.id} className="col-md-6 col-lg-4">
        <Card className="border-0 shadow rounded-4 card-hover h-100 d-flex flex-column">
          <Card.Img
            variant="top"
            src={product.image}
            className="rounded-top-4"
            style={{ height: "250px", objectFit: "cover" }}
          />

          <Card.Body className="d-flex flex-column">
 
            <div className="flex-grow-1">
              <Card.Title className="fw-bold fs-5">
                {product.title}{" "}
                <span className="text-muted small">#{product.id}</span>
              </Card.Title>

              <Card.Text className="text-secondary mb-2">
                <strong>Brand:</strong> {product.brand}
              </Card.Text>

              <Badge bg="warning" className="mb-3">
                {product.category}
              </Badge>
            </div>

       
            <div className="d-flex justify-content-between mt-auto pt-3 me-4 ms-4">
              <Button
                variant="outline-warning"
                size="sm"
                onClick={() => handleEdit(product.id)}
              >
                Edit
              </Button>
              <Button
                variant="outline-danger"
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
