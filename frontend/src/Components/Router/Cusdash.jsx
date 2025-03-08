import React from 'react';
import { Router, Routes, Route, Link } from "react-router-dom";
import Navbar from '../Customer/Navbar';
import AllProducts from '../Customer/AllProducts';
import About from '../Customer/About';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Footer from '../Customer/Footer';
import ProductDetail from '../Customer/ProductDetail';
import Cart from '../Customer/Cart';
import HomePage from '../Customer/HomePage';

function Cusdash() {
    return (
        <>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={
                    <>
                        <div className="container">
                            <div className="row vh-100">
                                <div className="col-md-12 text-center d-flex justify-content-center align-items-center flex-column">
                                    <h1>Dashboard</h1>
                                    <p>this is home</p>
                                    <button className="btn btn-primary">
                                        <Link className="nav-link" to="/products">Get Started</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                } /> */}
                <Route path="/shop" element={<AllProducts />} />
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/product/:id" element={<ProductDetail />} />

            </Routes>
            <Footer/>
        </>
    )
}

export default Cusdash