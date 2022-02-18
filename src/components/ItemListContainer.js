import React, { useState, useMemo, useEffect } from "react";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

/* 
cambio estado, props, o se ejecuta un evento
*/

export default function ItemListContainer() {
  const [bool, setBool] = useState(true);
  const [data, setData] = useState([])

  const apiResult = () => {
    return ([
      { id: 1, name: "item1", price: 123 },
      { id: 2, name: "item2", price: 123 },
      { id: 3, name: "item3", price: 123 },
    ])
  }

  const items = useMemo(
    () => apiResult(),
    []
  );
  useEffect(() => {
    setData(items)
  }, [items])

  const handleClick = () => {
    setBool(!bool);
  };

  console.log("itemListContainer");
  return (
    <>
      <Link to="/cart">Ir al cart</Link>
      <button onClick={() => handleClick()}>cambiar estado</button>
      <ItemList items={data} />
    </>
  );
}
