import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { BsClock } from "react-icons/bs";

import rolling420 from "../assets/rolling-420.png";
import ultimateBlue from "../assets/ultimate-blue.png";
import bongchieCones from "../assets/bongchie-cones.png";
import brownRipper from "../assets/brown-ripper.png";
import ultimateYellow from "../assets/ultimate-yellow.png";
import rawTips from "../assets/raw-tips.png";

const products = [
  {
    id: 1,
    title: "420 Double Booklet Brown Rolling Paper & Tips",
    weight: "1 pack (66 pieces)",
    price: 222,
    image: rolling420,
    time: "17 MINS",
  },
  {
    id: 2,
    title: "Ultimate Rolling Paper with Filter Tips & More (Blue)",
    weight: "1 pack (32 Leaves + 32 Tips)",
    price: 52,
    oldPrice: 80,
    discount: "35% OFF",
    image: ultimateBlue,
    time: "17 MINS",
  },
  {
    id: 3,
    title: "Perfect Rolled Cones (Natural) - Bongchie",
    weight: "3 pack",
    price: 45,
    image: bongchieCones,
    time: "17 MINS",
  },
  {
    id: 4,
    title: "Brown Ripper Rolling Paper 32 Leaves + Tips",
    weight: "1 pack (64 pieces)",
    price: 120,
    image: brownRipper,
    time: "17 MINS",
  },
  {
    id: 5,
    title: "Ultimate Rolling Paper with Filter Tips (Yellow)",
    weight: "1 pack (32 pieces)",
    price: 59,
    oldPrice: 90,
    discount: "34% OFF",
    image: ultimateYellow,
    time: "17 MINS",
  },
  {
    id: 6,
    title: "Perforated Wide Tips Roach - Raw",
    weight: "1 pack (50 pieces)",
    price: 50,
    image: rawTips,
    time: "17 MINS",
  },
];

const RollingPaperTobacco = () => {
  return (
    <Container className="my-4">
      <h5 className="fw-bolder mb-5 text-success">Rolling paper & tobacco</h5>
      <Row style={{ flexWrap: "nowrap", overflow: "hidden" }}>
        {products.map((prod) => (
          <Col
            key={prod.id}
            style={{ flex: "0 0 16.66%" }}
            className="mb-4"
          >
            <Card
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                height: "100%", 
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
                    zIndex: 1,
                  }}
                >
                  {prod.discount}
                </div>
              )}
              <Card.Img
                variant="top"
                src={prod.image}
                style={{
                  height: "100px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <div
                className="d-flex align-items-center text-muted"
                style={{ fontSize: "11px" }}
              >
                <BsClock className="me-1" />
                {prod.time}
              </div>
              <Card.Body className="p-0 mt-1">
                <Card.Title
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    minHeight: "40px",
                  }}
                >
                  {prod.title}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-2" style={{ minHeight: '36px' }}>
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
                        height: '30px',  
                        padding: '0 12px'
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

export default RollingPaperTobacco;
