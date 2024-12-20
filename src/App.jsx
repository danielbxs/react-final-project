import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route element={<Layout />}>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;
