
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <>

      <div style={{ backgroundColor: "#ffebf0", color: "#d40064", fontWeight: "bold", padding: "5px 0", textAlign: "center", fontSize: "14px" }}>
        💄 Hot Pink Sale Is Live!
      </div>

     
      <Navbar className="bg-white shadow-sm py-3">
        <Container>
         
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://tse2.mm.bing.net/th?id=OIF.4HrLd4IYkcZhk%2bT09Qnw%2bw&pid=Api&P=0&h=180"
              alt="Nykaa Logo"
              style={{ height: "30px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button
              as={Link}
              to="/add-product"
              style={{
                backgroundColor: "#e80071",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold"
              }}
            >
              Add Product
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
