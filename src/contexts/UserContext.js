import { createContext, useContext, useReducer } from "react";
import { userDefaultState } from "./userDefaultState";
import { userReducer } from "../reducers/userReducer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userDefaultState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
