import React, { useState, useEffect } from "react";
import { add } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import "../component/ProductDetails.css";
import useFetch from "../customHooks/useFetch";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  // Add product to the cart
  const handleadd = (product) => {
    dispatch(add(product));
  };
  return loading ? (
    <div className="d-flex align-items-center">
      <strong role="status">Loading...</strong>
      <div className="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
  ) : (
    <div className="m-10 justify-content-center align-items-center">
      <h5>Product</h5>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data?.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-details">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-description">{item.description}</p>
              <div className="product-price">
                <span>Price: </span>${item.price}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleadd(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
