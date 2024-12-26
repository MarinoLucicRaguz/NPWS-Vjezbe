import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (newCar) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((car) => car.model === newCar.model);
      if (productExists) {
        return prevCart.map((car) =>
          car.model === newCar.model
            ? { ...car, quantity: car.quantity + 1 }
            : car
        );
      } else {
        return [...prevCart, { ...newCar, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) =>
      prevCart
        .map((car) =>
          car.model === productName
            ? { ...car, quantity: car.quantity - 1 }
            : car
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
