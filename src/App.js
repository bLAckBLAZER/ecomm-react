import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Login, Products } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
      {/* <Route path="/logout" element={<Logout />}></Route>
      <Route path="/signup" element={<Signup />}></Route> */}
    </Routes>
  );
};

export default App;
