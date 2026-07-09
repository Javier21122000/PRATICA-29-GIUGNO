// src/pages/Home.jsx   prima pagina che si presenta subito alla avvio
import React from "react";
import Jumbotron from "../components/Jumbotron";
import ListBooks from "../components/ListBooks";

function Home() {
  return (
    <>
      <Jumbotron />
      <div className="container">
        <ListBooks />
      </div>
    </>
  );
}

export default Home;
