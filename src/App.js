import "./App.css";

import ReactSpinner from "./components/ReactSpinner";
import SideDrawer from "./components/SideDrawer";
import HamburguerWidget from "./components/HamburgerWidget";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function App() {

  const [sideDrawer, setSideDrawer] = useState(false);
  const [message, setMessage] = useState('')
  const showSideDrawer = () => setSideDrawer(true);
  const closeSideDrawer = () => setSideDrawer(false);

  useEffect(() => {})

  useEffect(() => {}, [sideDrawer])

  const suma = (a, b) => {
    return setMessage('Suma: ' + a + b);
  }

  const resta = (a, b) => {
    setMessage(a-b)
    return a - b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <ReactSpinner />
        {!sideDrawer ? (
          <HamburguerWidget showSideDrawer={showSideDrawer} icon={faBars} />
        ) : (
          <SideDrawer closeSideDrawer={closeSideDrawer} suma={suma} resta={resta} />
        )}
      </header>
        {message && <p>Hola {message}</p>}
    </div>
  );
}

export default App;
