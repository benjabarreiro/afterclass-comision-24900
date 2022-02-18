import React, { memo, useMemo } from "react";
import Item from "./Item";
import { useCartContext } from "../context/CartContext";

const ItemList = ({ items }) => {
  console.log("itemlist");
  const { addItem } = useCartContext();
  const memoAddItem = useMemo(() => addItem, []);
  return (
    <>
      {items.map((prod) => (
        <Item key={prod.id} prod={prod} handlerAddItem={memoAddItem} />
      ))}
    </>
  );
};

export default memo(ItemList);
