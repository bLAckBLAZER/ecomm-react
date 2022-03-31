import { authDefaultState } from "../contexts/authDefaultState";
export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, user: payload.foundUser, token: payload.encodedToken };
    case "LOGOUT":
      return authDefaultState;
    default:
      return state;
  }
};
