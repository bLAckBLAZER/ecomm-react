import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import { UserProvider } from "./contexts/UserContext";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
