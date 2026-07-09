// src/components/CommentArea.jsx commenti aggiornati al routing
import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NWM0Y2E0NjE0NDAwMTVlMDVjZmIiLCJpYXQiOjE3ODI5OTYwNDQsImV4cCI6MTc4NDIwNTY0NH0.1cg0iYrTLJ029LDs1wud-pQDKRhZFcoG4eQZlUMboBA";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fai una fetch col GET
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

  // useeffect per vedere quando cambia il mio asin nell url
  useEffect(() => {
    if (asin) {
      fetchComments();
    } else {
      setComments([]);
    }
  }, [asin]);

  return (
    <div className="p-3 border rounded bg-light shadow-sm">
      <h5 className="mb-3">Recensioni Libro</h5>

      {/* gestione degli stati asincroni */}
      {isLoading ? (
        <p className="text-center text-muted">Caricamento in corso...</p>
      ) : comments.length > 0 ? (
        <CommentsList comments={comments} refetch={fetchComments} />
      ) : (
        <p className="text-muted text-center my-3 small">
          Ancora nessuna recensione per questo libro. Sii il primo! 📝
        </p>
      )}

      {/* form col POST */}
      <AddComment asin={asin} refetch={fetchComments} />
    </div>
  );
}

export default CommentArea;
