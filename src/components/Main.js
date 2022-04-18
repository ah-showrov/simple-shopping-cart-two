import Cart from "./Cart";
import Products from "./Products";
const Main = ({ addProduct, removeProduct, cartItems, products }) => {
  return (
    <div className="flex">
      <Products products={products} addProduct={addProduct} />
      <Cart
        cartItems={cartItems}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default Main;
