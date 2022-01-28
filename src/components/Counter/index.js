import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Counter({ setCount, count }) {
  return (
    <div>
      <FontAwesomeIcon onClick={() => setCount(count - 1)} icon={faMinus} />
      <span>{count}</span>
      <FontAwesomeIcon icon={faPlus} onClick={() => setCount(count + 1)} />
    </div>
  );
}
