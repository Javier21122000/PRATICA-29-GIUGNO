// src/pages/BookDetails.jsx  dettaglidei libri
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentArea from "../components/CommentArea";
import fantasy from "../data/fantasy.json"; // array del prof

function BookDetails() {
  const { asin } = useParams(); // prendi asin dagli url
  const navigate = useNavigate(); // naviga avanti e indietro

  // cerca il libro negli asin
  const currentBook = fantasy.find((book) => book.asin === asin);

  return (
    <div className="container mt-4">
      <button className="btn btn-dark mb-4" onClick={() => navigate(-1)}>
        ← Torna alla Home
      </button>

      <div className="row">
        {/* copertina e info trovati giusti */}
        <div className="col-md-6 text-center mb-4">
          {currentBook ? (
            <div className="p-4 border rounded bg-white shadow-sm">
              <img
                src={currentBook.img}
                alt={currentBook.title}
                style={{ maxHeight: "350px", objectFit: "contain" }}
                className="img-fluid mb-3 rounded"
              />
              <h3 className="h4">{currentBook.title}</h3>
              <p className="badge bg-info text-dark text-capitalize my-2">
                {currentBook.category}
              </p>
              <p className="h5 text-primary mt-2">{currentBook.price}€</p>
              <p className="text-muted small mt-3">ASIN: {asin}</p>
            </div>
          ) : (
            // asin nell url sbagliato dall utente , dammi errore
            <div className="p-5 border rounded bg-light">
              <h3>Libro non trovato 😢</h3>
              <p className="text-muted">
                Nessun titolo corrisponde all'ASIN: {asin}
              </p>
            </div>
          )}
        </div>

        {/* recensione dell asin che ho roichiesto */}
        <div className="col-md-6">
          <CommentArea asin={asin} />
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
