import React from "react";
import { Link } from "react-router-dom";

function Admindash() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="mynavbar"
          >
            <ul className="navbar-nav bg-light border border-1 rounded">
              <li className="nav-item px-3">
                <Link className="nav-link" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link disabled" to="/orders" tabIndex="-1" aria-disabled="true">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/reports" tabIndex="-1" aria-disabled="true">
                  Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Admindash;
