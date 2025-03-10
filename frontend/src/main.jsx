// import {  StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// // Import all of Bootstrap's CSS
// import "bootstrap";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// main.jsx
// main.jsx
// main.jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);