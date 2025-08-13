import { Container, Navbar, Button,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" style={{ padding: "0.5rem 1rem" }}>
      <Container className="d-flex align-items-center justify-content-between">
     
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center gap-2 text-primary">
          <img
            src={logo}
            alt="Blinkit Logo"
            height="30"
            className="d-inline-block align-top"
          />
      
        </Navbar.Brand>


        <div style={{ fontWeight: "600", fontSize: "15px" }}>
          <div>Delivery in <span style={{ color: "#000" }}>17 minutes</span></div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            Pasodra Patiya, Surat, Gujarat, India
            <span style={{ cursor: "pointer", fontSize:"20px" }}> <GoTriangleDown /></span>
          </div>
        </div>

   

        <Navbar.Collapse className="justify-content-end mt-2 mb-2">
          <Link to="/add-product">
            <Button variant="success">Add Product</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
