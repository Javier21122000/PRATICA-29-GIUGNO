// prima funzione react
import React from "react";

// le props che gli do sono testo, img e alt dell img
//gli do anche unso stile moderno al bottone con button style etc
function Card({ buttonText, imgSrc, imgAlt }) {
  return (
    <div
      style={{
        border: "1px solid #555",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{ width: "100px", height: "auto" }}
      />
      <br />
      <button
        style={{
          backgroundColor: "#007BFF", // Colore di sfondo blu
          color: "white", // Testo bianco
          border: "none", // Rimuove il bordo brutto di default
          padding: "10px 20px", // Spazio interno (sopra/sotto e destra/sinistra)
          borderRadius: "5px", // Angoli arrotondati
          cursor: "pointer", // Cambia il cursore in una manina quando ci passi sopra
          fontSize: "16px", // Testo un po' più grande
          fontWeight: "bold", // Testo in grassetto
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
