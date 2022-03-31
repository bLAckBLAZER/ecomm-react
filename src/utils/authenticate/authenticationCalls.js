import axios from "axios";

export const userLogin = async (state, dispatch, email, password, navigate) => {
  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (res.status === 200 || res.status === 201) {
      const { foundUser, encodedToken } = res.data;

      dispatch({ type: "LOGIN", payload: { foundUser, encodedToken } });

      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(foundUser));

      navigate("/products");
    }
  } catch {
    throw new Error("Error in loggin in!");
  }
};

export const userLogout = (dispatchAuth, userDispatch) => {
  try {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    dispatchAuth({ type: "LOGOUT" });
    userDispatch({ type: "RESET" });
  } catch {
    throw new Error("Logout failed");
  }
};
