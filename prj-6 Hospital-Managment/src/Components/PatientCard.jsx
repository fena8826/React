const PatientCard = ({ patient, onEdit, onDelete }) => {
  return (
    <div className="card">
      <h4>{patient.firstName}</h4>
      <p>Gender: {patient.gender}</p>
      <p>Blood Group: {patient.bloodGroup}</p>
      <p>Mobile: {patient.mobile}</p>
      <p>Email: {patient.email}</p>
      <p>City: {patient.city}</p>
      <p>Room No: {patient.roomNo}</p>
      <p>Type: {patient.patientType}</p>
      <div className="card-buttons">
        <button onClick={() => onEdit(patient)}>Edit</button>
        <button onClick={() => onDelete(patient.id)}>Delete</button>
      </div>
    </div>
  );
};

export default PatientCard;


