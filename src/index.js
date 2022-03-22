import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>,
  document.getElementById("root")
);
