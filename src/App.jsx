import React from 'react';
import HeaderNav from './components/HeaderNav';
import Jumbotron from './components/Jumbotron';
import ListBooks from './components/ListBooks';

function App() {
  return (
    <div>
      <HeaderNav />
      <Jumbotron />
      <ListBooks />
    </div>
  );
}

export default App;
