import axios from "axios";
import { removeLocalStorage, setLocalStorage } from "../localStorageCalls";

export const userLogin = async (state, dispatch, email, password, navigate) => {
  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (res?.status === 200 || res?.status === 201) {
      const { foundUser, encodedToken } = res.data;

      dispatch({ type: "LOGIN", payload: { foundUser, encodedToken } });

      setLocalStorage("token", encodedToken);
      setLocalStorage("user", foundUser, true);

      navigate("/products");
    }
  } catch {
    throw new Error("Error in loggin in!");
  }
};

export const userLogout = (dispatchAuth, userDispatch) => {
  try {
    removeLocalStorage("token");
    removeLocalStorage("user");

    dispatchAuth({ type: "LOGOUT" });
    userDispatch({ type: "RESET" });
  } catch {
    throw new Error("Logout failed");
  }
};
