// src/components/ListBooks.jsx nuova listi libri tolte le props e aggiunto il routing
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigatore routing
import books from "../data/fantasy.json";

function ListBooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // hook per url

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container my-4">
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca un libro per titolo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row g-4">
        {filteredBooks.map((book) => (
          <div className="col-12 col-md-4" key={book.asin}>
            <div
              className="card h-100 shadow-sm"
              // al click sulla card dammi url dei dettagli
              onClick={() => navigate(`/details/${book.asin}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={book.img}
                className="card-img-top"
                alt={book.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-truncate">{book.title}</h5>
                <p className="card-text fw-bold text-success">{book.price}€</p>
                <button className="btn btn-primary w-100">Dettagli</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListBooks;
