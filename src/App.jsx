// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <div>
      {/* navbare sempre fissa in tutti i ruoting*/}
      <HeaderNav />

      {/* cambiami i component quando cambia l url */}
      <Routes>
        {/* quando url è / allora dammi la home */}
        <Route path="/" element={<Home />} />

        {/* quando url è details allora dammi i detaggli*/}
        <Route path="/details/:asin" element={<BookDetails />} />

        {/* url sbagliato dai il 404 */}
        <Route
          path="*"
          element={
            <div className="text-center mt-5">
              <h3>404 - Pagina Non Trovata 🧭</h3>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
