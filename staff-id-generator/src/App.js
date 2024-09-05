// src/App.js
import React, { useState } from "react";
import StaffForm from "./components/StaffForm";
import IDCard from "./components/IDCard";
import "./App.css";

const App = () => {
  const [staff, setStaff] = useState(null);

  const handleFormSubmit = (staffData) => {
    setStaff(staffData);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <StaffForm onSubmit={handleFormSubmit} />
      </div>
      <div className="id-card-container">
        {staff && <IDCard staff={staff} />}
      </div>
    </div>
  );
};

export default App;
