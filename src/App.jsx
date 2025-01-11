import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/ProductDetails";
import CheckAvailability from "./component/CheckAvailability";

const App = () => {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check-availability" element={<CheckAvailability />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
