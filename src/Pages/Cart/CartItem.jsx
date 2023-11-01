import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { addToCart, cart, removeToCart } = useContext(ShopContext);
  const { id, productName, productImage, price } = item;
  return (
    <div className="cartItem">
      <img className="w-56" src={productImage} />
      <div>
        <p>{productName}</p>
        <p>{price * 2}</p>
        <p>{cart[id]}</p>
        <div className="flex gap-2 outline-2">
          <button onClick={() => removeToCart(id)}>-</button>
          <button onClick = {() => addToCart(id)} >+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
