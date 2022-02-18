import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
