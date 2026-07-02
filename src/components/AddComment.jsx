// src/components/AddComment.jsx
import React, { useState } from "react";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NWM0Y2E0NjE0NDAwMTVlMDVjZmIiLCJpYXQiOjE3ODI5OTYwNDQsImV4cCI6MTc4NDIwNTY0NH0.1cg0iYrTLJ029LDs1wud-pQDKRhZFcoG4eQZlUMboBA";

function AddComment({ asin, refetch }) {
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState("1");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impedisce alla pagina di ricaricarsi

    // oggetto dall api
    const newComment = {
      comment: commentText,
      rate: rating,
      elementId: asin, // asin del libro a cui è associato
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(newComment), // json stringify per trasformare in stringa
      });

      if (response.ok) {
        setCommentText(""); // svuota il campo di testo dopo l'invio
        setRating("1");
        refetch(); // aggiorna la lista visualizzata a schermo
      }
    } catch (error) {
      console.error("Errore nell'invio del commento", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 p-2 border-top">
      <div className="mb-2">
        <label className="form-label font-monospace small">Comment text</label>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Add comment here..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label font-monospace small">Rating</label>
        <select
          className="form-select form-select-sm"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-sm w-100 mt-2">
        Submit
      </button>
    </form>
  );
}

export default AddComment;
