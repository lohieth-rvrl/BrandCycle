import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-4 ">
        {/* position-absolute w-100 top-100 start-0 */}
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">About Us</h5>
            <p>
              We are an online marketplace offering high-quality products with the best deals. Explore our wide range of items tailored just for you!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@ecommerce.com</p>
            <p>Phone: +91 98765 43210</p>
            <div className="social-icons">
              <a href="#" className="icon"><FaFacebook /></a>
              <a href="#" className="icon"><FaTwitter /></a>
              <a href="#" className="icon"><FaInstagram /></a>
              <a href="#" className="icon"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom text-center py-2">
        <small>© {new Date().getFullYear()} E-Commerce Store. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
