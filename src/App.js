import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./components/fakeData";

const App = () => {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  const addProduct = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeProduct = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                products={products}
                addProduct={addProduct}
                removeProduct={removeProduct}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
