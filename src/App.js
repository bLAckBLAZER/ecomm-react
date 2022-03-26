import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { CartPage, Homepage, Login, Products, Wishlist } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
  );
};

export default App;
