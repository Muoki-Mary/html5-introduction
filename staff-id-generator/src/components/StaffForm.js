// src/components/StaffForm.js
import React from "react";
import "./StaffForm.css";

const StaffForm = ({ staff, setStaff }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setStaff((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="staff-form">
      <input
        type="text"
        name="firstName"
        value={staff.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="middleName"
        value={staff.middleName}
        onChange={handleChange}
        placeholder="Middle Name"
      />
      <input
        type="text"
        name="lastName"
        value={staff.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="department"
        value={staff.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <input
        type="text"
        name="mobileNumber"
        value={staff.mobileNumber}
        onChange={handleChange}
        placeholder="Mobile Number"
      />
      <input
        type="file"
        name="photo"
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  );
};

export default StaffForm;
