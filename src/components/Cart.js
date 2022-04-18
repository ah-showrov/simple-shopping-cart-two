import React from "react";

const Cart = ({ cartItems, addProduct, removeProduct }) => {
  // way 1
  /*let itemsPrice = 0;
   for (let i = 0; i < cartItems.length; i++) {
    itemsPrice += cartItems[i].quantity * cartItems[i].price;
  } */
  // way 2
  const itemsPrice = cartItems.reduce(
    (prev, curr) => prev + curr.quantity * curr.price,
    0
  );

  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 1500 ? 40 : 0;

  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  if (cartItems.length === 0) {
    return (
      <div
        style={{ flex: 1, background: "skyblue", border: "1px solid black" }}
        className="cart__container"
      >
        <h2>Your Cart is Empty..</h2>
      </div>
    );
  }
  return (
    <div
      style={{ flex: 1, background: "skyblue", border: "1px solid black" }}
      className="cart__container"
    >
      {cartItems.map((item) => (
        <div className="flex" style={{ alignItems: "center" }} key={item.id}>
          <h3>{item.title} </h3>
          <h4>{item.quantity}</h4>
          <h4>{item.quantity * item.price}</h4>
          <h2>
            <button
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                background: "green",
                color: "white",
                display: "inline-block",
                marginLeft: "5px",
                padding: "5px",
              }}
              onClick={() => addProduct(item)}
            >
              +
            </button>
            <button
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
              onClick={() => removeProduct(item)}
            >
              -
            </button>
          </h2>
        </div>
      ))}
      <hr />
      <div>
        <div className="flex" style={{ padding: "4px 15px" }}>
          <h4>Items Price:</h4>
          <h4> {itemsPrice} </h4>
        </div>
        <div className="flex" style={{ padding: "4px 15px" }}>
          {" "}
          <h4>Tax Price:</h4>
          <h4> {Math.round(taxPrice * 100) / 100} </h4>
        </div>
        <div className="flex" style={{ padding: "4px 15px" }}>
          <h4>Shipping Price:</h4>
          <h4> {parseInt(shippingPrice)} </h4>
        </div>
        <hr />
        <div className="flex" style={{ padding: "15px 15px" }}>
          <h4>
            <strong>Total Price:</strong>
          </h4>
          <h4>
            <strong>{totalPrice}</strong>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
