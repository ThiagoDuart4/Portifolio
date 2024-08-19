import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

// ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home"
import Landing from "./pages/LandingPage/Landing"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path="home" element={<Home />} />
    
      <Route  path="/" index element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    <App />
);


