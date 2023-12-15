import React from "react";
import "./NavbarStyles.scss";

function Navbar() {
  const SavePdf = () => {
    window.print();
  };
  return (
    <div className="nav">
      <div className="navbar">
        <h1>Only Identity</h1>
      </div>
      <div className="pdfButton">
        <button
          onClick={() => {
            SavePdf();
          }}
          className="savePdf"
        >
          DOWNLOAD PDF
        </button>
      </div>
    </div>
  );
}

export default Navbar;
