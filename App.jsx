import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
