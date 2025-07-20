
import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/storageData";

const AddProduct = () => {
  const navigate = useNavigate();
  const intialState = {
    title: "",
    category: "",
    price: "",
    brand:"",
    image: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({
      length: 6,
      useLetters: false,
    });
    inputForm.id = id;

    let data = getStorageData();
    data.push(inputForm);
    setStorageData(data);
    navigate("/");
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  
  return (
    <>
<Container
  className="d-flex justify-content-center align-items-center"
  style={{ minHeight: "90vh" }}
>
  <div className="p-5 shadow rounded bg-white" style={{ width: "100%", maxWidth: "700px" }}>
    <h2 className="text-center mb-4 text-danger">Add Product</h2>

    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Title
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={inputForm.title}
            onChange={handleChanged}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Price
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="number"
            placeholder="Enter Price"
            name="price"
            value={inputForm.price}
            onChange={handleChanged}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Category
        </Form.Label>
        <Col sm="9">
          <Form.Select aria-label="Default select example"name="category" onChange={handleChanged}
          >
            <option>Select Category</option>
            <option value="Mekeup">Mekeup</option>
            <option value="Skin">Skin</option>
            <option value="Hair">Hair</option>
            <option value="Health & wellness">Health & wellness</option>
          </Form.Select>
        </Col>
      </Form.Group>
 <Form.Group as={Row} className="mb-4">
        <Form.Label column sm="3">
          brand
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="brand name"
            name="brand"
            value={inputForm.brand}
            onChange={handleChanged}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Form.Label column sm="3">
          Image
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter Image URL"
            name="image"
            value={inputForm.image}
            onChange={handleChanged}
          />
        </Col>
      </Form.Group>

      <div className="text-center">
        <Button variant="danger" type="submit">
          Add Product
        </Button>
      </div>
    </Form>
  </div>
</Container>  
    </>
  );
};

export default AddProduct;
