import React from "react";

const IDCard = ({ staffName, department, photo }) => {
  return (
    <div
      id="id-card"
      style={{ border: "1px solid #000", padding: "10px", width: "300px" }}
    >
      <h2>{staffName}</h2>
      <h3>{department}</h3>
      {photo && (
        <img
          src={photo}
          alt="Staff Photo"
          style={{ width: "100px", height: "100px" }}
        />
      )}
    </div>
  );
};

export default IDCard;
