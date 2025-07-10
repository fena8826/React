import React from "react";
import "./App.css";
import PatientManager from "./Components/PatientManager";
import { BsHospital } from "react-icons/bs";

function App() {
  return (
    <div className="app-container ">
      <h1 className="fw-bolder text-success"> <BsHospital /><div className="ms-3">Hospital Management App</div></h1>
      <PatientManager />
    </div>
  );
}

export default App;



