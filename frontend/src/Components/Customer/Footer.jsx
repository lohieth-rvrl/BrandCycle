import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-light py-5">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-5">
            <a href="/" className="d-block mb-4 text-3xl text-white font-bold text-decoration-none">
              BrandCycle
            </a>
            <p className="text-gray-300">
              Our e-commerce platform is a feature-rich, modern shopping website designed for an intuitive and hassle-free user experience. Built with React.js for a dynamic frontend and Node.js (Express) with MongoDB for a robust backend, it offers a fast, secure, and scalable shopping solution.
            </p>
            <div className="d-flex mt-4">
              <a href="/" className="me-3" aria-label="Visit our Facebook">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FaFacebook className="text-primary" />
                </div>
              </a>
              <a href="/" className="me-3" aria-label="Visit our Twitter">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FaTwitter className="text-primary" />
                </div>
              </a>
              <a href="/" className="me-3" aria-label="Visit our Instagram">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FaInstagram className="text-primary" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-5">
            <h5 className="mb-4 pb-2 border-bottom border-2 border-primary text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-gray-300 text-decoration-none hover-underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="/shop" className="text-gray-300 text-decoration-none hover-underline">Shop</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-300 text-decoration-none hover-underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-300 text-decoration-none hover-underline">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="text-gray-300 text-decoration-none hover-underline">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms-and-conditions" className="text-gray-300 text-decoration-none hover-underline">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-5">
            <h5 className="mb-4 pb-2 border-bottom border-2 border-primary text-white">Contact Us</h5>
            <p className="text-gray-300">Email: support@brandcycle.com</p>
            <p className="text-gray-300">Phone: +91 98765 43210</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-gray-600 pt-4 mt-4 text-center">
          <p className="text-gray-500 mb-0">
            © {new Date().getFullYear()} BrandCycle, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;