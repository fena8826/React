import {Container,Navbar,Nav,Form,FormControl,Button,}from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    dispatch({ type: "SEARCH_PRODUCT", payload: search });
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-primary">
          <img
            src={logo}
            alt="Blinkite Logo"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>

          {/* Search bar */}
          <Form
            className="d-flex me-3 header-search success"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
          
          </Form>

          {/* Add Product link */}
          <Nav.Link as={Link} to="/add-product" className="product fw-semibold">
            Add Product
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
