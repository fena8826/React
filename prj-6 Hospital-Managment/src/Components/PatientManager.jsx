
import React, { useState, useEffect } from "react";
import PatientForm from "./PatientForm";
import PatientCard from "./PatientCard";
import "./Patient.css";

const PatientManager = () => {
  
  const [patients, setPatients] = useState(() => {
    const storedPatients = localStorage.getItem("patients");
    return storedPatients ? JSON.parse(storedPatients) : [];
  });

  const [editPatient, setEditPatient] = useState(null);

  const handleAddOrUpdate = (patient) => {
    if (patient.id) {
     
      setPatients(patients.map(p => p.id === patient.id ? patient : p));
    } else {
 
      const newPatient = { ...patient, id: Date.now().toString() };
      setPatients([...patients, newPatient]);
    }
    setEditPatient(null);
  };

  const handleDelete = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  const handleEdit = (patient) => {
    setEditPatient(patient);
  };


  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="manager">
      <div className="left-panel">
        <PatientForm onSubmit={handleAddOrUpdate} patientToEdit={editPatient} />
      </div>
      <div className="right-panel">
  
  <div className="card-grid">
    {patients.map((patient) => (
      <PatientCard
        key={patient.id}
        patient={patient}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ))}
  </div>
</div>
    </div>
  );
};

export default PatientManager;
 