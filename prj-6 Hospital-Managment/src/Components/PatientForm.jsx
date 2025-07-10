import React, { useEffect, useState } from "react";


const initialForm = {
  id: "",
  firstName: "",
  gender: "",
  bloodGroup: "",
  mobile: "",
  email: "",
  city: "",
  roomNo: "",
  patientType: "",
  
};

const PatientForm = ({ onSubmit, patientToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (patientToEdit) {
      setForm(patientToEdit);
    }
  }, [patientToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
   <div>
       <h3 className="text-success fw-bolder"><div>{form.id ? "Edit" : "Add"} Patient</div></h3>
   </div>
      <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange}/>
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>



      
      <input name="bloodGroup" placeholder="Blood Group" value={form.bloodGroup} onChange={handleChange} />
      <input name="mobile" placeholder="Mobile No" value={form.mobile} onChange={handleChange} />
      <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange}  />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange}/>
      <input name="roomNo" placeholder="Room No" value={form.roomNo} onChange={handleChange} />
      <input name="patientType" placeholder="Patient Type (e.g. OPD, IPD)" value={form.patientType} onChange={handleChange}  />
      <button type="submit">{form.id ? "Update" : "Add"} Patient</button>
    </form>
  );
};

export default PatientForm;