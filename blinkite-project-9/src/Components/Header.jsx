// import {Container,Navbar,Nav,Form}from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import logo from "../assets/logo.svg";
// import { useDispatch } from "react-redux";
// import { IoIosSearch } from "react-icons/io";
// import { useState } from "react";

// const Header = () => {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");

//   const handleSearch = () => {
//     dispatch({ type: "SEARCH_PRODUCT", payload: search });
//   };

//   return (
//     <Navbar bg="light" expand="lg" className="shadow-sm py-3">
//       <Container>
   
//         <Navbar.Brand href="/" className="fw-bold text-primary">
//           <img
//             src={logo}
//             alt="Blinkite Logo"
//             height="30"
//             className="d-inline-block align-top"
//           />{" "}
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />


//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto"></Nav>

         
//        <Container className="mt-4">
//             <Form
//               className="d-flex justify-content-center mb-4"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSearch();
//               }}
//             >
//               <div className="search-wrapper">
//                 <input
//                   type="text"
//                   className="search-input"
//                   placeholder="Search by title, category or price..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <button type="button" className="search-btn" onClick={handleSearch}>
//                   <IoIosSearch />
//                 </button>
//               </div>
//             </Form>
//           </Container>


//           <Nav.Link as={Link} to="/add-product" className="product">
//         Add Product
//           </Nav.Link>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;


import { Container, Navbar, Nav } from "react-bootstrap";
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
        <Navbar.Brand href="/" className="fw-bold text-primary">
          <img
            src={logo}
            alt="Blinkite Logo"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>

          {/* Search logic exists, but no visible input */}

          <Nav.Link
            as={Link}
            to="/add-product"
            className="product custom-add-btn"
          >
            Add Product
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
