import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <div className="container-fluid py-2 p-0" id="nav1">
      <div className="container px-5">
        <nav className="navbar navbar-expand-lg">
          <div className="container p-0">
            <Link className="navbar-brand" to="/">
              <h1>BRAND-C</h1>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-4">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">ALL Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">CONTACT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="bi bi-cart"></i> CART
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
