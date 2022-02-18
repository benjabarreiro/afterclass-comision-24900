import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const [change, setChange] = useState(false);
  const { cart } = useCartContext();
  console.log("me renderizo");
  return (
    <div>
      <Link style={change ? { color: "red" } : { color: "black" }} to="/">
        Ir al inicio
      </Link>
      {cart.length !== 0 ? (
        <CartList cart={cart} />
      ) : (
        <span>NO hay productos</span>
      )}
      <button onClick={() => setChange(!change)}>Cambiar estilo</button>
    </div>
  );
};

export default Cart;
