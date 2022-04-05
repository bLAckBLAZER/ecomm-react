import { getLocalStorage } from "../utils/localStorageCalls";

export const authDefaultState = {
  token: getLocalStorage("token") || "",
  user: getLocalStorage("user", true) || null,
};
