// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../css/customer.css";

// const Navbar = () => {
//   return (
//     <div className="container-fluid py-2 p-0" id="nav1">
//       <div className="container px-5">
//         <nav className="navbar navbar-expand-lg">
//           <div className="container p-0">
//             <Link className="navbar-brand" to="/">
//               <h1>BRAND-C</h1>
//             </Link>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto gap-4">
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/   ">
//                     HOME
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/shop">
//                     ALL Products
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/about">
//                     ABOUT
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/contact">
//                     CONTACT
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/cart">
//                     <i className="bi bi-cart"></i> CART
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaTruck, FaBars, FaChevronDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = () => {
  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-dark text-white py-2 d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <i className="fa-solid fa-bag-shopping me-3"></i>
              <span>Seamless Shopping &amp; Unbeatable Prices</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="/" className="me-3" aria-label="Visit our Facebook">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                  <FaFacebookF className="text-primary" />
                </div>
              </a>
              <a href="/" className="me-3" aria-label="Visit our Twitter">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                  <FaTwitter className="text-primary" />
                </div>
              </a>
              <a href="/" className="me-3" aria-label="Visit our Instagram">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                  <FaInstagram className="text-primary" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand fs-3 fw-bold text-primary">
            BrandCycle
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Free Shipping Banner */}
              <li className="nav-item d-lg-none text-center my-3">
                <Link to="/shop" className="text-decoration-none">
                  <div className="d-flex align-items-center justify-content-center">
                    <FaTruck className="me-2" />
                    <span>FREE SHIPPING on Orders $50+</span>
                  </div>
                </Link>
              </li>

              {/* Account Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                  <li>
                    <Link to="/login" className="dropdown-item">User Login</Link>
                  </li>
                  <li>
                    <Link to="/orders" className="dropdown-item">Order Management</Link>
                  </li>
                </ul>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <Link to="/about" className="dropdown-item">About Us</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="dropdown-item">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions" className="dropdown-item">Terms and Conditions</Link>
                  </li>
                </ul>
              </li>

              {/* Cart Link */}
              <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart</Link>
              </li>

              {/* Contact Link */}
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>

            {/* Shop Now Button (Desktop Only) */}
            <div className="d-none d-lg-block ms-4">
              <Link to="/shop" className="btn btn-primary text-uppercase fw-bold">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;