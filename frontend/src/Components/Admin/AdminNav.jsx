
import React from "react";

function Admindash() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <a className="nav-link" href="/">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orders">Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/users">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reports">Reports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Admindash;
