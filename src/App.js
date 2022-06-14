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
  Checkout,
} from "./pages";
import { Footer, NavBar } from "./components";

import { PageNotFound, PrivateRoute } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="wrapper justify-between">
      <NavBar />
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
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
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
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
