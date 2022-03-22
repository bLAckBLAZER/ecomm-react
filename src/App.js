import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Login } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
