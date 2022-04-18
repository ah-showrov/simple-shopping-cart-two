import React from "react";

const Product = ({ product, addProduct }) => {
  return (
    <div className="product__card">
      <img className="product__image" src={product.image} alt="" />
      <h3>{product.title}</h3>
      <h4>${product.price}</h4>
      <div>
        <button onClick={() => addProduct(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
