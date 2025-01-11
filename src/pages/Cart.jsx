import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
          }}
        >
          <Link to={`/product-details/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "50px", width: "50px", borderRadius: "5px" }}
            />
          </Link>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0" }}>{item.title}</h4>
            <p style={{ margin: "0", color: "#555" }}>Price: ${item.price}</p>
          </div>
          <button
            style={{ color: "white", background: "black" }}
            onClick={() => {
              handleRemove(item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
