import React, { memo } from "react";

function Item({ prod, handlerAddItem }) {
  console.log("item");
  return (
    <>
      <div className="condicion ? red : black">
        <div className="card w-100 mt-5">
          <div className="card-header">{`${prod.name}`}</div>
		      <button onClick={() => handlerAddItem(prod)}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
}
export default memo(Item)
