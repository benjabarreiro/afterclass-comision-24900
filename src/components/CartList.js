import React, { memo } from "react";
import { useCartContext } from "../context/CartContext";

const CartList = memo(
  ({ cart }) => {
    const { deleteOne } = useCartContext();
    console.log("cartlist");
    return (
      <div>
        {cart.length > 0 &&
          cart.map((x) => (
            <div key={x.id}>
              {console.log(x.id)}
              <h1>{x.name}</h1>
              <p>{x.price}</p>
              <p>{x.quantity}</p>
              <button onClick={() => deleteOne(x.id)}>borrar</button>
            </div>
          ))}
      </div>
    );
  },
  (oldProp, newProp) => oldProp.cart.length === newProp.cart.length
);
export default CartList;
