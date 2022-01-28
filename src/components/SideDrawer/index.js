import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Counter from "../Counter";
import Button from "../Button";

export default function SideDrawer({ closeSideDrawer, suma, resta }) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="side-drawer open">
      <FontAwesomeIcon onClick={closeSideDrawer} icon={faTimes} />
      <Counter setCount={setCount1} count={count1} />
      <Counter setCount={setCount2} count={count2} />
      <Button func={suma} numA={count1} numB={count2} text="Sumar" />
      <Button func={resta} numA={count1} numB={count2} text="Restar" />
    </div>
  );
}
