// src/components/StaffForm.js
import React, { useState } from "react";
import html2canvas from "html2canvas";
import "./StaffForm.css"; // Ensure this import is present

const StaffForm = ({ onSubmit }) => {
  const [staff, setStaff] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    department: "",
    mobileNumber: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff((prevStaff) => ({ ...prevStaff, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setStaff((prevStaff) => ({ ...prevStaff, photo: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(staff);
  };

  const printIDCard = () => {
    window.print();
  };

  const downloadIDCard = () => {
    const idCard = document.getElementById("id-card");
    html2canvas(idCard).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "staff-id-card.png";
      link.click();
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={staff.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={staff.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={staff.middleName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={staff.department}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={staff.mobileNumber}
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Generate ID</button>
      </form>

      <div className="button-container">
        <button className="print" onClick={printIDCard}>
          Print ID Card
        </button>
        <button className="download" onClick={downloadIDCard}>
          Download ID Card
        </button>
      </div>
    </div>
  );
};

export default StaffForm;
