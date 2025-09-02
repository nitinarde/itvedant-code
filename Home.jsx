import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

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
    <div className="container text-center mt-5">
      <h2>Featured Mobiles</h2>
      <div className="row justify-content-center g-4 mt-3">
        {products.map((prod) => (
          <div key={prod.id} className="col-md-4 col-sm-6">
            <div className="card">
              <img src={prod.image} className="card-img-top" alt={prod.name} />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text text-muted">{prod.specs[0]}</p>
                <Link
                  to={`/products/${prod.id}`}
                  className="btn btn-outline-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
