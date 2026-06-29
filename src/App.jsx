// qui scrivo il vero codice che andra a riempire quello delle card.jsx
import { useState } from 'react'
import Card from './Card' // collego alle card.jsx e funzioni
import heroImg from './assets/bimbo-saggio.jpg' // 
import reactLogo from './assets/monk-studying.jpg'

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '50px' }}>
      
      {/* immagine e un testo */}
      <Card 
        buttonText="bottone del bimbo" 
        imgSrc={heroImg} 
        imgAlt="Immagine 1 alt" 
      />

      {/* immagine 2 e un testo*/}
      <Card 
        buttonText="bottone del monaco" 
        imgSrc={reactLogo} 
        imgAlt="immagine 2 alt" 
      />

    </div>
  )
}

export default App;
