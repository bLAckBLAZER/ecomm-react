import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import {
  CartPage,
  Homepage,
  Login,
  Products,
  Wishlist,
  Signup,
  Logout,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
