import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { addToCart, cart, removeFromCart } = useContext(ShopContext);
  const { id, productName, productImage, price } = item;

  const PrdTotalCost = price * cart[id];
  console.log("Total Cost Of Each", PrdTotalCost);
  return (
    <div className="cartItem">
      <img className="w-56" src={productImage} />
      <div>
        <p>{productName}</p>
        <p>{PrdTotalCost}</p>
        <p>{cart[id]}</p>
        <div className="flex gap-2 outline-2">
          <button onClick={() => removeFromCart(id)}>-</button>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
