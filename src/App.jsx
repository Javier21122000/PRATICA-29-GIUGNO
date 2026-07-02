// src/App.jsx
import React, { useState } from "react";
import HeaderNav from "./components/HeaderNav";
import Jumbotron from "./components/Jumbotron";
import ListBooks from "./components/ListBooks";
import CommentArea from "./components/CommentArea";

function App() {
  // Stato per salvare l'ASIN del libro selezionato
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  return (
    <div>
      <HeaderNav />
      <Jumbotron />
      <div className="container-fluid">
        <div className="row">
          {/* colonna libri */}
          <div className="col-md-8">
            {/* passo la funzione per asin */}
            <ListBooks
              onBookSelect={setSelectedBookAsin}
              selectedAsin={selectedBookAsin}
            />
          </div>
          {/* Colonna dei commenti bloccata in alto durante lo scroll */}
          <div
            className="col-md-4"
            style={{ position: "sticky", top: "20px", height: "fit-content" }}
          >
            {/* Mostriamo l'area commenti solo se è stato selezionato un libro */}
            {selectedBookAsin ? (
              <CommentArea asin={selectedBookAsin} />
            ) : (
              <div className="p-3 text-muted text-center border rounded bg-light">
                Vedrai i commenti apparire qui cliccando su una delle Cards📚
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
