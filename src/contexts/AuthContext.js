import { createContext, useContext, useReducer } from "react";
import { authDefaultState } from "./authDefaultState";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext(authDefaultState);

const AuthProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, authDefaultState);

  return (
    <AuthContext.Provider value={{ authState, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
