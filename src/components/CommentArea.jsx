// src/components/CommentArea.jsx
import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

// dati e api da inserire
const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NWM0Y2E0NjE0NDAwMTVlMDVjZmIiLCJpYXQiOjE3ODI5OTYwNDQsImV4cCI6MTc4NDIwNTY0NH0.1cg0iYrTLJ029LDs1wud-pQDKRhZFcoG4eQZlUMboBA";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Funzione GET per caricare i commenti
  const fetchComments = async () => {
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

  // Esegue la GET ogni volta che l'asin del libro cambia
  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div className="p-3 border rounded bg-light">
      <h5>Recensioni Libro</h5>
      {isLoading ? (
        <p>Caricamento...</p>
      ) : (
        /* ricarica commenti dopo DELETE */
        <CommentsList comments={comments} refetch={fetchComments} />
      )}
      {/* passo asin per associare nuovo commento */}
      <AddComment asin={asin} refetch={fetchComments} />
    </div>
  );
}

export default CommentArea;
