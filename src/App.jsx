// src/App.jsx
import React, { useState } from "react";
import HeaderNav from "./components/HeaderNav";
import Jumbotron from "./components/Jumbotron";
import ListBooks from "./components/ListBooks";
import CommentArea from "./components/CommentArea";

function App() {
  // stato iniziale null perhce non ho nessun libro selezionato
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  return (
    <div>
      <HeaderNav />
      <Jumbotron />
      <div className="container-fluid">
        <div className="row">
          {/* colonna libri */}
          <div className="col-md-8">
            <ListBooks
              onBookSelect={setSelectedBookAsin}
              selectedAsin={selectedBookAsin}
            />
          </div>
          
          {/* rimani bloccata quando vado in scroll */}
          <div
            className="col-md-4"
            style={{ position: "sticky", top: "20px", height: "fit-content" }}
          >
            {/* ora non è se e quando ma SEMPRE li visibile*/}
            <CommentArea asin={selectedBookAsin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;