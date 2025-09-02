import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      });
  }, []);

  const addToCart = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product.id }),
    }).then(() => alert("Added to cart!"));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-5 text-center">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid mb-3" />
      <p>Price: ${product.price}</p>
      <p>Specs: {product.specs.join(", ")}</p>
      <button className="btn btn-primary" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
