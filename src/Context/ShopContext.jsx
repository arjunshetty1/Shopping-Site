import { createContext, useState, useEffect } from "react";

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
  const [finalCost, setFinalCost] = useState(0);

  const addToCart = (itemId) => {
    setCart({ ...cart, [itemId]: cart[itemId] + 1 });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };




  //Total Cost :
  const calculateTotalCost = (cart) => {
    let totalCost = 0;

    for (const itemId in cart) {
      totalCost += cart[itemId];
    }

    return totalCost;
  };

  useEffect(() => {
    const finalCost = calculateTotalCost(cart);
    setFinalCost(finalCost);
    console.log("Final Cost:", finalCost);
  }, [cart]);

  console.log("damn", finalCost);
  //Total Cost End




  const contextValue = { addToCart, removeFromCart, cart,finalCost };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
