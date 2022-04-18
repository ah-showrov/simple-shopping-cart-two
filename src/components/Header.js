import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <header
      className="flex"
      style={{ paddingRight: "20px", position: "sticky", top: "0" }}
    >
      <h2>Quick_Shop</h2>
      <div
        style={{
          width: "160px",
          textAlign: "right",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          to="/cart"
        >
          Cart
          {cartItems.length < 10 ? (
            <span
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                background: "red",
                color: "white",
                display: "inline-block",
                marginLeft: "5px",
                padding: "5px",
              }}
            >
              0{cartItems.length}
            </span>
          ) : (
            <span
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                background: "red",
                color: "white",
                display: "inline-block",
                marginLeft: "5px",
                padding: "5px",
              }}
            >
              {cartItems.length}
            </span>
          )}
        </Link>
        <Link style={{ textDecoration: "none" }} to="/signup">
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
