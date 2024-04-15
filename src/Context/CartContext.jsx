import React, { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (game) => {
    const updatedCart = [...cart];
    const existingGame = updatedCart.find((item) => item.id === game.id);

    if (existingGame) {
      setCart(
        updatedCart.map((item) => {
          if (item.id === game.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setCart([...updatedCart, { ...game, quantity: 1 }]);
    }
  };

  const emptyCart = () => {
    setCart([]); 
  };

  const increaseQuantity = (id) =>{
    setCart(
        cart.map((item) => {
            if(item.id === id){
                const newQuantity = Math.max(item.quantity +1, 0)
                return {...item, quantity:newQuantity}
            } 
            return item
        })
    )
  }

  const decreaseQuantity = (id) =>{
    setCart(
        cart.map((item) =>{
            if(item.id === id){
                const newQuantity = Math.max(item.quantity -1, 0)
                if(newQuantity === 0 ){
                    emptyCart()
                }
                return {...item, quantity:newQuantity}
            }
            return item
        })
    )
  }

  return (
    <GameContext.Provider value={{ cart, addToCart, emptyCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </GameContext.Provider>
  );
};
