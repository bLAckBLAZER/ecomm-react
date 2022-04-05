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

import { PrivateRoute } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
