
//   import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { getStorageData, setStorageData } from "../Services/storageData";

// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const intialState = {
//     id: "",
//     title: "",
//     category: "",
//     price: "",
//     brand:"",
//     image: "",
//   };
//   const [inputForm, setInputForm] = useState(intialState);

//   const handleChanged = (e) => {
//     const { name, value } = e.target;
//     setInputForm({
//       ...inputForm,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     let data = getStorageData();
//     let updateData = data.map(prod => {
//         if(prod.id == id){
//             return inputForm
//         }else{
//             return prod
//         }
//     })
//     setStorageData(updateData);
//     navigate("/");
//   };

//   useEffect(()=> {
//     let data = getStorageData();
//     let singleRec = data.find(product => product.id == id)
//     setInputForm(singleRec);
//   }, [id]);
//   return (
//     <>
// <Container
//   className="d-flex justify-content-center align-items-center"
//   style={{ minHeight: "90vh" }}
// >
//   <div className="p-5 shadow rounded bg-white" style={{ width: "100%", maxWidth: "700px" }}>
//     <h2 className="text-center mb-4 text-danger">Edit Product</h2>

//     <Form onSubmit={handleSubmit}>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm="3">
//           Title
//         </Form.Label>
//         <Col sm="9">
//           <Form.Control
//             type="text"
//             name="title"
//             value={inputForm.title}
//             onChange={handleChanged}
//           />
//         </Col>
//       </Form.Group>

//     <Form.Group as={Row} className="mb-4">
//            <Form.Label column sm="3">
//              brand
//            </Form.Label>
//            <Col sm="9">
//              <Form.Control
//                type="text"
//                placeholder="brand name"
//                name="brand"
//                value={inputForm.brand}
//                onChange={handleChanged}
//              />
//            </Col>
//          </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm="3">
//           Price
//         </Form.Label>
//         <Col sm="9">
//           <Form.Control
//             type="number"
//             name="price"
//             value={inputForm.price}
//             onChange={handleChanged}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm="3">
//           Category
//         </Form.Label>
//         <Col sm="9">
//           <Form.Select
//             name="category"
//             value={inputForm.category}
//             onChange={handleChanged}
//           >
//              <option>Select Category</option>
//                 <option  value="Mekeup" selected={inputForm.category == "Mekeup"}>Mekeup</option>
//                 <option  value="Skin" selected={inputForm.category == "Skin"}>Skin</option>
//                 <option value="Hair" selected={inputForm.category == "Hair"}>Hair</option>
//                 <option value="Health & wellness" selected={inputForm.category == "  Health & wellness"}>Health & wellness</option>
//           </Form.Select>
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-4">
//         <Form.Label column sm="3">
//           Image
//         </Form.Label>
//         <Col sm="9">
//           <Form.Control
//             type="text"
//             name="image"
//             value={inputForm.image}
//             onChange={handleChanged}
//           />
//         </Col>
//       </Form.Group>

//       <div className="text-center">
//         <Button variant="danger" type="submit">
//           Update Product
//         </Button>
//       </div>
//     </Form>
//   </div>
// </Container>
//     </>
//   );
// };

// export default EditProduct;


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/storageData";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const intialState = {
    id: "",
    title: "",
    category: "",
    price: "",
    brand: "",
    image: "",
  };

  const [inputForm, setInputForm] = useState(intialState);
  const [errors, setErrors] = useState({});

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // clear specific error on input
  };

  const validate = () => {
    const newErrors = {};
    if (!inputForm.title.trim()) newErrors.title = "Title is required.";
    if (!inputForm.brand.trim()) newErrors.brand = "Brand is required.";
    if (!inputForm.price || Number(inputForm.price) <= 0)
      newErrors.price = "Price must be a positive number.";
    if (!inputForm.category || inputForm.category === "Select Category")
      newErrors.category = "Category is required.";
    if (!inputForm.image.trim()) {
      newErrors.image = "Image URL is required.";
    } else if (
      !/^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/i.test(inputForm.image)
    ) {
      newErrors.image = "Enter a valid image URL.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    let data = getStorageData();
    let updateData = data.map((prod) => {
      if (prod.id == id) {
        return inputForm;
      } else {
        return prod;
      }
    });
    setStorageData(updateData);
    navigate("/");
  };

  useEffect(() => {
    let data = getStorageData();
    let singleRec = data.find((product) => product.id == id);
    setInputForm(singleRec);
  }, [id]);

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div
          className="p-5 shadow rounded bg-white"
          style={{ width: "100%", maxWidth: "700px" }}
        >
          <h2 className="text-center mb-4 text-danger">Edit Product</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Title
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="title"
                  value={inputForm.title}
                  onChange={handleChanged}
                  isInvalid={!!errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors.brand}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.brand}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Price
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="number"
                  name="price"
                  value={inputForm.price}
                  onChange={handleChanged}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Category
              </Form.Label>
              <Col sm="9">
                <Form.Select
                  name="category"
                  value={inputForm.category}
                  onChange={handleChanged}
                  isInvalid={!!errors.category}
                >
                  <option>Select Category</option>
                  <option value="Mekeup">Mekeup</option>
                  <option value="Skin">Skin</option>
                  <option value="Hair">Hair</option>
                  <option value="Health & wellness">Health & wellness</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm="3">
                Image
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="image"
                  value={inputForm.image}
                  onChange={handleChanged}
                  isInvalid={!!errors.image}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.image}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <div className="text-center">
              <Button variant="danger" type="submit">
                Update Product
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default EditProduct;
