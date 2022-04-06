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

import { PageNotFound, PrivateRoute } from "./components";

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
      <Route
        path="*"
        element={
          <PageNotFound
            errorMsg="Oops! Looks like you have lost your way. The page you're looking for
does not exist.
"
            gotoMsg="Go to Homepage"
            gotoPath="/"
          />
        }
      />
    </Routes>
  );
};

export default App;
