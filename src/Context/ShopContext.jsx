import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  };
};

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    console.log("id", itemId);
    setCart({ ...cart, [itemId]: cart[itemId] + 1 });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { addToCart, removeFromCart, cart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
