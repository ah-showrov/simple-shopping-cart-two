import React from "react";
import Product from "./Product";

const Products = ({ products, addProduct }) => {
  return (
    <div style={{ flex: 2 }} className="product__container">
      {products.map((product) => (
        <Product key={product.id} product={product} addProduct={addProduct} />
      ))}
    </div>
  );
};

export default Products;
