// src/components/IDCard.js
import React from "react";
import logo from "../assests/logo.png";
import "./IDCard.css";

const IDCard = ({ staff }) => {
  const photoUrl = staff.photo ? URL.createObjectURL(staff.photo) : "";

  return (
    <div className="id-card">
      <div className="header">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo" />
          <p className="Institution-name">MAHANAIM COLLEGE</p>
        </div>
        <div className="right-section">
          <h2>STAFF ID CARD</h2>
        </div>
      </div>
      <div className="main-section">
        <div className="info">
          <p>
            Emp Name: {staff.firstName} {staff.lastName}
          </p>
          <p>Middle Name: {staff.middleName}</p>
          <p>Department: {staff.department}</p>
          <p>Mobile No.: {staff.mobileNumber}</p>
        </div>
        <div className="photo-section">
          <img
            src={photoUrl}
            alt={`${staff.firstName} ${staff.lastName}`}
            className="staff-photo"
          />
        </div>
      </div>
      <footer className="footer">
        <p>info@mei.ac.ke</p>
        <p class="copy-right">@ 2021 College, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IDCard;
