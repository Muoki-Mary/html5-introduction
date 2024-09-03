import React, { useState } from "react";
import StaffForm from "./components/StaffForm";
import IDCard from "./components/IDCard";
import html2canvas from "html2canvas";

const App = () => {
  const [staffDetails, setStaffDetails] = useState(null);

  const handleGenerateID = (details) => {
    setStaffDetails(details);
  };

  const handleDownload = () => {
    const card = document.getElementById("id-card");
    html2canvas(card).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "staff-id.png";
      link.click();
    });
  };

  return (
    <div>
      <h1>Staff ID Generator</h1>
      <StaffForm onSubmit={handleGenerateID} />
      {staffDetails && (
        <>
          <IDCard {...staffDetails} />
          <button onClick={handleDownload}>Download ID as Image</button>
        </>
      )}
    </div>
  );
};

export default App;
