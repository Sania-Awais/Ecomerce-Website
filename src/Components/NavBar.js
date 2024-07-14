import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/products">Products</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
