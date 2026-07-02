// src/components/CommentsList.jsx
import React from "react";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NWM0Y2E0NjE0NDAwMTVlMDVjZmIiLCJpYXQiOjE3ODI5OTYwNDQsImV4cCI6MTc4NDIwNTY0NH0.1cg0iYrTLJ029LDs1wud-pQDKRhZFcoG4eQZlUMboBA";

function CommentsList({ comments, refetch }) {
  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(`${API_URL}/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (response.ok) {
        // ricarico subito commenti aggiornati
        refetch();
      } else {
        alert("Impossibile eliminare il commento");
      }
    } catch (error) {
      console.error("Errore durante la cancellazione", error);
    }
  };

  if (comments.length === 0)
    return <p className="text-muted">Nessuna recensione presente.</p>;

  return (
    <ul className="list-group mb-3">
      {comments.map((c) => (
        <li
          key={c._id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>Voto: {c.rate}/5</strong>
            <p className="mb-0 text-secondary">{c.comment}</p>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(c._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
