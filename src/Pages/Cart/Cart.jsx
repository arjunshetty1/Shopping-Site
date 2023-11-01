import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems flex justify-around px-10 mt-10">
        {PRODUCTS.map((item) => {
          if (cart[item.id] !== 0) {
            return <CartItem item={item} />
            
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
