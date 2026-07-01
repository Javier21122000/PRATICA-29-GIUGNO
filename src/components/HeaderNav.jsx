import React from 'react';

function HeaderNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">La Mia Libreria</a>
      <div className="navbar-nav">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="#">Info</a>
      </div>
    </nav>
  );
}

export default HeaderNav;
