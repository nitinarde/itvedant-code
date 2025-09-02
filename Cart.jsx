import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      });
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group">
          {cart.map((p, index) => (
            <li key={index} className="list-group-item">
              {p.name} - ${p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
