import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import AdminNav from "../Admin/AdminNav";
import ManageProduct from "../Admin/ManageProduct";
import Users from "../Admin/Users";

function Admindash() {
    return (
        <>
            <AdminNav />
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="container">
                            <div className="row vh-100">
                                <div className="col-md-12 text-center d-flex justify-content-center align-items-center flex-column">
                                    <h1>Dashboard</h1>
                                    <p>Welcome to the admin dashboard.</p>
                                    <button className="btn btn-primary">
                                        <Link className="nav-link" to="/products">Get Started</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                } />
                <Route path="/products" element={<ManageProduct />} />
                {/* <Route path="/orders" element={<Orders />} /> */}
                <Route path="/users" element={<Users />} />
                {/* <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} /> */}
            </Routes>
        </>
    );
}

export default Admindash;
