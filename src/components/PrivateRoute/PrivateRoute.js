import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { authState } = useAuth();

  return authState.token ? children : <Navigate to="/login" replace />;
};
