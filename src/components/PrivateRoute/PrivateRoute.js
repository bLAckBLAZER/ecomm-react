import { useAuth } from "../../contexts/AuthContext";
import { Login } from "../../pages/Authentication/Login";

export const PrivateRoute = ({ children }) => {
  const { authState } = useAuth();

  console.log(authState);

  return authState.token ? children : <Login />;
};
