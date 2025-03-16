import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admindash from './Components/Router/Admindash';
import Cusdash from './Components/Router/Cusdash';
import { CartProvider } from './context/CartContext';
import './css/App.css';
import './css/customer.css';


export default function App() {
  const isAdmin = false; // Example condition for admin vs. user view

  return (
    <CartProvider >
      <Router>
        <Routes>
          <Route path="/*" element={isAdmin ? <Admindash /> : <Cusdash />} />
        </Routes>
      </Router>
    </CartProvider>
  );

}
