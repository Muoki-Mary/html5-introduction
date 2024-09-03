// src/components/StaffForm.js
import React, { useState } from "react";

const StaffForm = ({ onSubmit }) => {
  const [staffName, setStaffName] = useState("");
  const [department, setDepartment] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ staffName, department, photo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Staff Name"
        value={staffName}
        onChange={(e) => setStaffName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
        required
      />
      <button type="submit">Generate ID</button>
    </form>
  );
};
export default StaffForm;
