// src/App.js
import React, { useState } from "react";
import StaffForm from "./components/StaffForm";
import IDCard from "./components/IDCard";
import "./App.css";

const App = () => {
  // Initialize the state for the staff object
  const [staff, setStaff] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    department: "",
    mobileNumber: "",
    photo: null,
  });

  return (
    <div className="app-container">
      {/* Pass the staff and setStaff as props */}
      <StaffForm staff={staff} setStaff={setStaff} />
      <IDCard staff={staff} />
    </div>
  );
};

export default App;
