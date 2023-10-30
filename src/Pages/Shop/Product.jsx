import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Product = ({ item }) => {
  const { id, productName, productImage, price } = item;
  const { addToCart, cart } = useContext(ShopContext);

  return (
    <>
      <div key={id} className="flex flex-col w-[30%] ">
        <img className="w-[90%]" src={productImage} alt="Product Image" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold">{productName}</p>
          <p className="text-xl font-medium">{price}</p>
          <button
            onClick={() => addToCart(id)}
            className="bg-black p-2 rounded-2xl px-3 hover:bg-[#353434] text-white"
          >
            Add To Cart {cart[id] > 0 && <>{cart[id]}</>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
