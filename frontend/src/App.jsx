import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admindash from './Components/Router/Admindash';
import Cusdash from './Components/Router/Cusdash';
import './css/App.css';


export default function App() {
  const isAdmin = false; // Example condition for admin vs. user view

  return (
    <Router>
      <Routes>
        <Route path="/*" element={isAdmin ? <Admindash /> : <Cusdash />} />
      </Routes>
    </Router>
  );

}
