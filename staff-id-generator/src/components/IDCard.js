// src/components/IDCard.js
import React from "react";
import logo from "../assests/logo.png"; // Make sure the path to the logo is correct
import html2canvas from "html2canvas";
import "./IDCard.css";

// Function to handle printing the ID card
const printIDCard = () => {
  const idCard = document.getElementById("id-card");
  html2canvas(idCard).then((canvas) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.body.appendChild(canvas);
    newWindow.print();
  });
};

// Function to handle downloading the ID card
const downloadIDCard = () => {
  const idCard = document.getElementById("id-card");
  html2canvas(idCard).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "staff-id-card.png";
    link.click();
  });
};

const IDCard = ({ staff }) => {
  const photoUrl = staff.photo ? URL.createObjectURL(staff.photo) : "";

  return (
    <div id="id-card" className="id-card">
      {/* Top Section */}
      <div className="top-section">
        <div className="left-side">
          <p className="institution-name">MAHANAIM COLLEGE</p>
        </div>
        <div className="center">
          <img src={logo} alt="Logo" className="institution-logo" />
        </div>
        <div className="right-side">
          <p className="card-title">STAFF ID CARD</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        {/* Photo Section */}
        <div className="photo-section">
          <img
            src={photoUrl}
            alt={`${staff.firstName} ${staff.lastName}`}
            className="staff-photo"
          />
        </div>

        {/* Info Section */}
        <div className="info-section">
          <p>
            <strong>Full Name:</strong> {staff.firstName} {staff.middleName}{" "}
            {staff.lastName}
          </p>
          <p>
            <strong>Department:</strong> {staff.department}
          </p>
          <p>
            <strong>Mobile No.:</strong> {staff.mobileNumber}
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="button-container">
          <button className="generate-button">Generate ID</button>
          <button className="print-button" onClick={printIDCard}>
            Print ID Card
          </button>
          <button className="download-button" onClick={downloadIDCard}>
            Download ID Card
          </button>
        </div>

        <div className="footer-details">
          <p>Contact:0700260260 / 0700351048</p>
          <p>Off Thika Road Behind Safari Park Hotel Next to USIU</p>
          <p>info@mei.ac.ke</p>
        </div>
      </footer>
    </div>
  );
};

export default IDCard;
