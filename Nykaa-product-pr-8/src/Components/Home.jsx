import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/storageData";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import ReactPaginate from "react-paginate";
import "../App.css";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const itemsPerPage = 5;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const data = getStorageData();
    setProductData(data);
    setFilteredData(data);
  }, [location]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
  }, [itemOffset, filteredData]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    const data = getStorageData();
    const updated = data.filter((product) => product.id !== id);
    setStorageData(updated);
    setProductData(updated);
    setFilteredData(updated);
  };

  const handleSearch = () => {
    const lowerSearch = search.toLowerCase();
    const result = productData.filter((p) =>
      p.title.toLowerCase().includes(lowerSearch) ||
      p.category.toLowerCase().includes(lowerSearch) ||
      p.price.toString().includes(lowerSearch)
    );
    setFilteredData(result);
    setItemOffset(0);
  };

  const handleSort = () => {
    if (!sortOption) return;

    const [field, direction] = sortOption.split(",");
    const sorted = [...filteredData].sort((a, b) => {
      if (field === "price") {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return direction === "asc"
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      }
    });

    setFilteredData(sorted);
    setItemOffset(0);
  };

  const handleClearSearch = () => {
    setSearch("");
    setFilteredData(productData);
    setItemOffset(0);
  };

  return (
    <Container className="mt-5">
            <div className="search-sort-container">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Search by title, category, or price"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="custom-input"
                />
                <button className="btn search-btn" onClick={handleSearch}>Search</button>
                <button className="btn clear-btn" onClick={handleClearSearch}>Clear</button>
              </div>

              <div className="form-group">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="custom-select"
                >
                    <option value="">Sort By</option>
                    <option value="title,asc">Title ↑ (A-Z)</option>
                    <option value="title,desc">Title ↓ (Z-A)</option>
                    <option value="price,asc">Price ↑ (Low → High)</option>
                    <option value="price,desc">Price ↓ (High → Low)</option>
                    <option value="category,asc">Category ↑ (A-Z)</option>
                    <option value="category,desc">Category ↓ (Z-A)</option>

                </select>
                <button className="btn sort-btn" onClick={handleSort}>Sort</button>
              </div>
   

            </div>
      <div className="row g-4">
        {currentItems.map((product) => (
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
                    style={{
                      color: "#6c757d",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                    }}
                  >
                    <strong style={{ color: "#333" }}>Brand:</strong>{" "}
                    {product.brand}
                  </Card.Text>
                    
                  <span
                    className="mb-3 d-inline-block"
                    style={{
                      backgroundColor: "#ffb347",
                      color: "#fff",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                    }}
                  >
       
                    {product.category}
                  </span>
                </div>
                <div>
                <strong style={{ color: "#333" }}>Price:</strong> ₹{product.price}
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

   
      <div className="d-flex justify-content-center mt-4">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </Container>
  );
};

export default Home;

