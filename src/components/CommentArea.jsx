// src/components/CommentArea.jsx
import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NWM0Y2E0NjE0NDAwMTVlMDVjZmIiLCJpYXQiOjE3ODI5OTYwNDQsImV4cCI6MTc4NDIwNTY0NH0.1cg0iYrTLJ029LDs1wud-pQDKRhZFcoG4eQZlUMboBA";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // get e dammi ogni volta che chiamo api i veri commenti realigia scritti
  const fetchComments = async () => {
    if (!asin) return;
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/${asin}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error("Errore nel caricamento dei commenti", error);
    } finally {
      setIsLoading(false);
    }
  };

  // utilizzo useffect che è praticamente uguael a didupdate
  useEffect(() => {
    if (asin) {
      fetchComments();
    } else {
      setComments([]); // se non ho asin svuota i commenti di prima
    }
  }, [asin]);

  return (
    <div className="p-3 border rounded bg-light">
      <h5>Recensioni Libro</h5>

      {/* gestione lista delle recensioni */}
      {isLoading ? (
        <p>Caricamento...</p>
      ) : asin ? (
        <CommentsList comments={comments} refetch={fetchComments} />
      ) : (
        <p className="text-muted text-center my-3">
          Seleziona un libro per vedere le recensioni esistenti.
        </p>
      )}

      {/* addcomment lo monto sempre in fondo*/}
      <AddComment asin={asin} refetch={fetchComments} />
    </div>
  );
}

export default CommentArea;
