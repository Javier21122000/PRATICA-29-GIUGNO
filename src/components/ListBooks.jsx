import React, { useState } from 'react';
import books from '../data/fantasy.json';

function ListBooks() {
  // Stato per salvare il testo digitato dall'utente nella barra di ricerca
  const [searchTerm, setSearchTerm] = useState('');

  // Filtriamo i libri in tempo reale: tiene solo quelli il cui titolo include il testo cercato
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      {/* Campo di input per la ricerca */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca un libro per titolo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Griglia dei libri */}
      <div className="row g-4">
        {filteredBooks.map((book) => (
          // col-12 (1 colonna su mobile), col-md-4 (3 colonne a partire da 768px)
          <div className="col-12 col-md-4" key={book.asin}>
            <div className="card h-100 shadow-sm">
              <img 
                src={book.img} 
                className="card-img-top" 
                alt={book.title} 
                style={{ height: '300px', objectFit: 'cover' }} 
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
