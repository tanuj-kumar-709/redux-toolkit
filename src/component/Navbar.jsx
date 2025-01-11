import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <Link to={"/"} className="nav-item nav-link active">
              Home
            </Link>
            <Link to={"/cart"} className="nav-item nav-link">
              Cart
            </Link>
            <Link to={"/check-availability"} className="nav-item nav-link">
              Status
            </Link>

            <Link to={"/cart"} className="btn btn-primary">
              cart:&nbsp;
              <span className="badge text-bg-light">{items.length}</span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
