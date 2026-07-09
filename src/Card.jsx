// src/components/Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// asin alle props
function Card({ buttonText, imgSrc, imgAlt, asin }) {
  const navigate = useNavigate(); // usa react router per cambiare pagina

  return (
    <div
      style={{
        border: "1px solid #555",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        margin: "10px",
        backgroundColor: "white",
      }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{ width: "100px", height: "auto", marginBottom: "15px" }}
      />
      <br />
      <button
        // onclick portami alla pagina dei dettagli
        onClick={() => navigate(`/details/${asin}`)}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
