import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../component/ProductDetails.css";

const ProductDetails = () => {
  const items = useSelector((state) => state.cart);
  const { id } = useParams(); // Retrieve dynamic ID from the URL
  const product = items.find((p) => p.id === parseInt(id));
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          <span>Price: </span>${product.price}
        </div>
        <Link to="/">Back to Products</Link>
      </div>
    </div>
  );
};
export default ProductDetails;
