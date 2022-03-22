import { createContext, useReducer, useContext } from "react";
import { productDefaultState } from "./productDefaultStates";
import { productReducer } from "../reducers/productReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, productDefaultState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
