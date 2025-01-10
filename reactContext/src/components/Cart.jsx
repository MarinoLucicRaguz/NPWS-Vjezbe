import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <h1>Kosarica</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.model} - {item.price} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
