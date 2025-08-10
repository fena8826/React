
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { BsClock } from "react-icons/bs";

import milkGold from "../assets/milk-gold.png";
import milkTaaza from "../assets/milk-taaza.png";
import cheese from "../assets/cheese.png";
import butter from "../assets/butter.png";
import curdSmall from "../assets/curd-small.png";
import curdLarge from "../assets/curd-large.png";

const products = [
  {
    id: 1,
    title: "Amul Gold Full Cream Milk",
    weight: "500 ml",
    price: 35,
    image: milkGold,
    time: "12 MINS",
  },
  {
    id: 2,
    title: "Amul Taaza Toned Milk",
    weight: "500 ml",
    price: 28,
    image: milkTaaza,
    time: "12 MINS",
  },
  {
    id: 3,
    title: "Amul Cheese Cubes",
    weight: "200 g",
    price: 127,
    oldPrice: 135,
    image: cheese,
    time: "12 MINS",
    discount: "5% OFF",
  },
  {
    id: 4,
    title: "Amul Salted Butter",
    weight: "200 g",
    price: 60,
    image: butter,
    time: "12 MINS",
  },
  {
    id: 5,
    title: "Amul Masti Cup Curd",
    weight: "200 g",
    price: 24,
    image: curdSmall,
    time: "12 MINS",
  },
  {
    id: 6,
    title: "Amul Masti Cup Cup Curd",
    weight: "400 g",
    price: 47,
    image: curdLarge,
    time: "12 MINS",
  },
];

const ProductCard = () => {
  return (
    <Container className="my-4">
 <h5 className="fw-bolder mb-5  text-success">Dairy, Bread & Eggs</h5>

      <Row>
        {products.map((prod) => (
          <Col key={prod.id} xs={6} md={4} lg={2} className="mb-4">
            <Card
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
              className="p-2"
            >
              {prod.discount && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#0056d2",
                    color: "#fff",
                    fontSize: "10px",
                    padding: "2px 6px",
                    borderRadius: "3px",
                  }}
                >
                  {prod.discount}
                </div>
              )}
              <Card.Img
                variant="top"
                src={prod.image}
                style={{
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <div className="d-flex align-items-center text-muted" style={{ fontSize: "11px" }}>
                <BsClock className="me-1" />
                {prod.time}
              </div>
              <Card.Body className="p-0 mt-1">
                <Card.Title style={{ fontSize: "14px", fontWeight: "500", minHeight: "40px" }}>
                  {prod.title}
                </Card.Title>
                <div style={{ fontSize: "12px", color: "#6c757d" }}>{prod.weight}</div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div>
                    <span className="fw-bold">₹{prod.price}</span>{" "}
                    {prod.oldPrice && (
                      <small style={{ textDecoration: "line-through", color: "gray" }}>
                        ₹{prod.oldPrice}
                      </small>
                    )}
                  </div>
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      fontWeight: "bold",
                      borderRadius: "6px",
                    }}
                  >
                    ADD
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCard;
