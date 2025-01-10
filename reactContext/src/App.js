import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import DetailsWrapper from "./components/Details";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="main-app">
          <div className="navbar">
            <Navbar />
          </div>
          <h1>Trgovina automobila</h1>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/proizvodac/:make/:id" element={<DetailsWrapper />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
