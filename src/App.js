import "./App.css";

import ReactSpinner from "./components/ReactSpinner";
import SideDrawer from "./components/SideDrawer";
import HamburguerWidget from "./components/HamburgerWidget";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function App() {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {}, [sideDrawer]);

  const showSideDrawer = () => setSideDrawer(true);
  const closeSideDrawer = () => setSideDrawer(false);

  const suma = (a, b) => {
    const msg = `Suma: ${a + b}`;
    return setMessage(msg);
  };

  const resta = (a, b) => {
    const msg = `Resta: ${a - b}`;
    return setMessage(msg);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ReactSpinner />
        {!sideDrawer ? (
          <HamburguerWidget showSideDrawer={showSideDrawer} icon={faBars} />
        ) : (
          <SideDrawer
            closeSideDrawer={closeSideDrawer}
            suma={suma}
            resta={resta}
          />
        )}
      </header>
      {message && <p>Hola, {message}</p>}
    </div>
  );
}

export default App;
